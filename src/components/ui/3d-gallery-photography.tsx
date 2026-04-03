import type React from 'react';
import { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

type ImageItem = string | { src: string; alt?: string };

interface FadeSettings {
    fadeIn: {
        start: number;
        end: number;
    };
    fadeOut: {
        start: number;
        end: number;
    };
}

interface BlurSettings {
    blurIn: {
        start: number;
        end: number;
    };
    blurOut: {
        start: number;
        end: number;
    };
    maxBlur: number;
}

interface InfiniteGalleryProps {
    images: ImageItem[];
    speed?: number;
    zSpacing?: number;
    visibleCount?: number;
    falloff?: { near: number; far: number };
    fadeSettings?: FadeSettings;
    blurSettings?: BlurSettings;
    className?: string;
    style?: React.CSSProperties;
}

interface PlaneData {
    index: number;
    z: number;
    imageIndex: number;
    x: number;
    y: number;
}

const DEFAULT_DEPTH_RANGE = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET = 8;
// Explosive ease-out — fast burst then smooth settle
function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const createClothMaterial = () => {
    return new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
            map: { value: null },
            opacity: { value: 1.0 },
            blurAmount: { value: 0.0 },
            scrollForce: { value: 0.0 },
            time: { value: 0.0 },
            isHovered: { value: 0.0 },
            introProgress: { value: 0.0 },
        },
        vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        vNormal = normal;

        vec3 pos = position;

        // Create smooth curving based on scroll force
        float curveIntensity = scrollForce * 0.3;

        // Base curve across the plane based on distance from center
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;

        // Add gentle cloth-like ripples
        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.02;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.015;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;

        // Flag waving effect when hovered
        float flagWave = 0.0;
        if (isHovered > 0.5) {
          // Create flag-like wave from left to right
          float wavePhase = pos.x * 3.0 + time * 8.0;
          float waveAmplitude = sin(wavePhase) * 0.1;
          // Damping effect - stronger wave on the right side (free edge)
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = waveAmplitude * dampening;

          // Add secondary smaller waves for more realistic flag motion
          float secondaryWave = sin(pos.x * 5.0 + time * 12.0) * 0.03 * dampening;
          flagWave += secondaryWave;
        }

        // Apply Z displacement for curving effect (inverted) with cloth ripples and flag wave
        pos.z -= (curve + clothEffect + flagWave);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
        fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      uniform float scrollForce;
      uniform float time;
      varying vec2 vUv;
      varying vec3 vNormal;

      // Pseudo-random hash for grain
      float hash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      void main() {
        vec4 color = texture2D(map, vUv);

        // Simple blur approximation
        if (blurAmount > 0.0) {
          vec2 texelSize = 1.0 / vec2(textureSize(map, 0));
          vec4 blurred = vec4(0.0);
          float total = 0.0;

          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 offset = vec2(x, y) * texelSize * blurAmount;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = blurred / total;
        }

        // Add subtle lighting effect based on curving
        float curveHighlight = abs(scrollForce) * 0.05;
        color.rgb += vec3(curveHighlight * 0.1);

        // --- Vintage streetwear filter ---

        // Desaturate slightly for washed-out vintage feel
        float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        color.rgb = mix(color.rgb, vec3(luma), 0.35);

        // Cool color shift with purple tint
        color.r -= 0.03;
        color.g -= 0.02;
        color.b += 0.06;

        // Subtle purple push in midtones
        float mid = smoothstep(0.2, 0.5, luma) * smoothstep(0.8, 0.5, luma);
        color.r += mid * 0.04;
        color.b += mid * 0.06;

        // Lift blacks / crush whites for that faded film look — cool toned
        color.rgb = mix(vec3(0.04, 0.03, 0.07), vec3(0.90, 0.91, 0.96), color.rgb);

        // Subtle S-curve contrast
        color.rgb = smoothstep(0.0, 1.0, color.rgb);

        // Vignette — darken edges
        vec2 vc = vUv - 0.5;
        float vignette = 1.0 - dot(vc, vc) * 1.4;
        color.rgb *= clamp(vignette, 0.3, 1.0);

        // Film grain — animated
        float grain = hash(vUv * 800.0 + fract(time * 3.7)) * 0.12 - 0.06;
        color.rgb += vec3(grain);

        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
    });
};

function ImagePlane({
    texture,
    position,
    scale,
    material,
}: {
    texture: THREE.Texture;
    position: [number, number, number];
    scale: [number, number, number];
    material: THREE.ShaderMaterial;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (material && texture) {
            material.uniforms.map.value = texture;
        }
    }, [material, texture]);

    return (
        <mesh
            ref={meshRef}
            position={position}
            scale={scale}
            material={material}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
        </mesh>
    );
}

function GalleryScene({
    images,
    speed = 1,
    visibleCount = 8,
    fadeSettings = {
        fadeIn: { start: 0.05, end: 0.15 },
        fadeOut: { start: 0.85, end: 0.95 },
    },
    blurSettings = {
        blurIn: { start: 0.0, end: 0.1 },
        blurOut: { start: 0.9, end: 1.0 },
        maxBlur: 3.0,
    },
}: Omit<InfiniteGalleryProps, 'className' | 'style'>) {
    const [scrollVelocity, setScrollVelocity] = useState(0);

    const normalizedImages = useMemo(
        () =>
            images.map((img) =>
                typeof img === 'string' ? { src: img, alt: '' } : img
            ),
        [images]
    );

    const textures = useTexture(normalizedImages.map((img) => img.src));

    // Create materials pool
    const materials = useMemo(
        () => Array.from({ length: visibleCount }, () => createClothMaterial()),
        [visibleCount]
    );

    const spatialPositions = useMemo(() => {
        const positions: { x: number; y: number }[] = [];
        const maxHorizontalOffset = MAX_HORIZONTAL_OFFSET;
        const maxVerticalOffset = MAX_VERTICAL_OFFSET;
        const MIN_CENTER_OFFSET = 1.2; // minimum distance from center on each axis

        for (let i = 0; i < visibleCount; i++) {
            const horizontalAngle = (i * 2.618) % (Math.PI * 2);
            const verticalAngle = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);

            const horizontalRadius = Math.max((i % 3) * 1.2, 1.0);
            const verticalRadius = Math.max(((i + 1) % 4) * 0.8, 1.0);

            let x =
                (Math.sin(horizontalAngle) * horizontalRadius * maxHorizontalOffset) /
                3;
            let y =
                (Math.cos(verticalAngle) * verticalRadius * maxVerticalOffset) / 4;

            // Enforce minimum offset from center
            if (Math.abs(x) < MIN_CENTER_OFFSET) {
                x = x >= 0 ? MIN_CENTER_OFFSET : -MIN_CENTER_OFFSET;
            }
            if (Math.abs(y) < MIN_CENTER_OFFSET) {
                y = y >= 0 ? MIN_CENTER_OFFSET : -MIN_CENTER_OFFSET;
            }

            positions.push({ x, y });
        }

        return positions;
    }, [visibleCount]);

    const totalImages = normalizedImages.length;
    const depthRange = DEFAULT_DEPTH_RANGE;

    const planesData = useRef<PlaneData[]>(
        Array.from({ length: visibleCount }, (_, i) => ({
            index: i,
            z: visibleCount > 0 ? ((depthRange / visibleCount) * i) % depthRange : 0,
            imageIndex: totalImages > 0 ? i % totalImages : 0,
            x: spatialPositions[i]?.x ?? 0,
            y: spatialPositions[i]?.y ?? 0,
        }))
    );

    useEffect(() => {
        planesData.current = Array.from({ length: visibleCount }, (_, i) => ({
            index: i,
            z:
                visibleCount > 0
                    ? ((depthRange / Math.max(visibleCount, 1)) * i) % depthRange
                    : 0,
            imageIndex: totalImages > 0 ? i % totalImages : 0,
            x: spatialPositions[i]?.x ?? 0,
            y: spatialPositions[i]?.y ?? 0,
        }));
    }, [depthRange, spatialPositions, totalImages, visibleCount]);



    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        setScrollVelocity((prev) => prev + 1.3 * delta);

        setScrollVelocity((prev) => prev * 0.95);

        materials.forEach((material) => {
            if (material && material.uniforms) {
                material.uniforms.time.value = time;
                material.uniforms.scrollForce.value = scrollVelocity;
            }
        });

        const imageAdvance =
            totalImages > 0 ? visibleCount % totalImages || totalImages : 0;
        const totalRange = depthRange;
        const halfRange = totalRange / 2;

        planesData.current.forEach((plane, i) => {
            let newZ = plane.z + scrollVelocity * delta * 10;
            let wrapsForward = 0;
            let wrapsBackward = 0;

            if (newZ >= totalRange) {
                wrapsForward = Math.floor(newZ / totalRange);
                newZ -= totalRange * wrapsForward;
            } else if (newZ < 0) {
                wrapsBackward = Math.ceil(-newZ / totalRange);
                newZ += totalRange * wrapsBackward;
            }

            if (wrapsForward > 0 && imageAdvance > 0 && totalImages > 0) {
                plane.imageIndex =
                    (plane.imageIndex + wrapsForward * imageAdvance) % totalImages;
            }

            if (wrapsBackward > 0 && imageAdvance > 0 && totalImages > 0) {
                const step = plane.imageIndex - wrapsBackward * imageAdvance;
                plane.imageIndex = ((step % totalImages) + totalImages) % totalImages;
            }

            plane.z = ((newZ % totalRange) + totalRange) % totalRange;
            plane.x = spatialPositions[i]?.x ?? 0;
            plane.y = spatialPositions[i]?.y ?? 0;

            const normalizedPosition = plane.z / totalRange;
            let opacity = 1;

            if (
                normalizedPosition >= fadeSettings.fadeIn.start &&
                normalizedPosition <= fadeSettings.fadeIn.end
            ) {
                const fadeInProgress =
                    (normalizedPosition - fadeSettings.fadeIn.start) /
                    (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start);
                opacity = fadeInProgress;
            } else if (normalizedPosition < fadeSettings.fadeIn.start) {
                opacity = 0;
            } else if (
                normalizedPosition >= fadeSettings.fadeOut.start &&
                normalizedPosition <= fadeSettings.fadeOut.end
            ) {
                const fadeOutProgress =
                    (normalizedPosition - fadeSettings.fadeOut.start) /
                    (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
                opacity = 1 - fadeOutProgress;
            } else if (normalizedPosition > fadeSettings.fadeOut.end) {
                opacity = 0;
            }

            opacity = Math.max(0, Math.min(1, opacity));

            let blur = 0;

            if (
                normalizedPosition >= blurSettings.blurIn.start &&
                normalizedPosition <= blurSettings.blurIn.end
            ) {
                const blurInProgress =
                    (normalizedPosition - blurSettings.blurIn.start) /
                    (blurSettings.blurIn.end - blurSettings.blurIn.start);
                blur = blurSettings.maxBlur * (1 - blurInProgress);
            } else if (normalizedPosition < blurSettings.blurIn.start) {
                blur = blurSettings.maxBlur;
            } else if (
                normalizedPosition >= blurSettings.blurOut.start &&
                normalizedPosition <= blurSettings.blurOut.end
            ) {
                const blurOutProgress =
                    (normalizedPosition - blurSettings.blurOut.start) /
                    (blurSettings.blurOut.end - blurSettings.blurOut.start);
                blur = blurSettings.maxBlur * blurOutProgress;
            } else if (normalizedPosition > blurSettings.blurOut.end) {
                blur = blurSettings.maxBlur;
            }

            blur = Math.max(0, Math.min(blurSettings.maxBlur, blur));

            const material = materials[i];
            if (material && material.uniforms) {
                material.uniforms.opacity.value = opacity;
                material.uniforms.blurAmount.value = blur;
            }
        });
    });

    if (normalizedImages.length === 0) return null;

    return (
        <>
            {planesData.current.map((plane, i) => {
                const texture = textures[plane.imageIndex];
                const material = materials[i];

                if (!texture || !material) return null;

                const worldZ = plane.z - depthRange / 2;

                const aspect = texture.image
                    ? texture.image.width / texture.image.height
                    : 1;
                const scale: [number, number, number] =
                    aspect > 1 ? [2 * aspect, 2, 1] : [2, 2 / aspect, 1];

                return (
                    <ImagePlane
                        key={plane.index}
                        texture={texture}
                        position={[plane.x, plane.y, worldZ]}
                        scale={scale}
                        material={material}
                    />
                );
            })}
        </>
    );
}

function FallbackGallery({ images }: { images: ImageItem[] }) {
    const normalizedImages = useMemo(
        () =>
            images.map((img) =>
                typeof img === 'string' ? { src: img, alt: '' } : img
            ),
        [images]
    );

    return (
        <div className="flex flex-col items-center justify-center h-full bg-black p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {normalizedImages.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-32 object-cover rounded"
                    />
                ))}
            </div>
        </div>
    );
}

export default function InfiniteGallery({
    images,
    className = 'h-96 w-full',
    style,
    speed,
    zSpacing,
    visibleCount,
    falloff,
    fadeSettings = {
        fadeIn: { start: 0.05, end: 0.25 },
        fadeOut: { start: 0.4, end: 0.43 },
    },
    blurSettings = {
        blurIn: { start: 0.0, end: 0.1 },
        blurOut: { start: 0.4, end: 0.43 },
        maxBlur: 8.0,
    },
}: InfiniteGalleryProps) {
    const [webglSupported, setWebglSupported] = useState(true);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl =
                canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setWebglSupported(false);
            }
        } catch (e) {
            setWebglSupported(false);
        }
    }, []);

    if (!webglSupported) {
        return (
            <div className={className} style={style}>
                <FallbackGallery images={images} />
            </div>
        );
    }

    return (
        <div className={className} style={style}>
            <Canvas
                camera={{ position: [0, 0, 0], fov: 55 }}
                gl={{ antialias: true, alpha: true }}
            >
                <GalleryScene
                    images={images}
                    speed={speed}
                    visibleCount={visibleCount}
                    fadeSettings={fadeSettings}
                    blurSettings={blurSettings}
                />
            </Canvas>
        </div>
    );
}
