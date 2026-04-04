import { useEffect, useRef } from "react";

import { Sparkles } from "@/components/ui/sparkles";

type LogoItem =
  | { type: "image"; name: string; src: string; className?: string }
  | { type: "text"; name: string };

const logos: LogoItem[] = [
  { type: "image", name: "Cox", src: "/sponsors/cox.svg" },
  { type: "image", name: "Nexlayer", src: "/sponsors/nexlayer.png" },
  {
    type: "image",
    name: "ATDC",
    src: "/atdc.png",
    className: "h-9 md:h-10 grayscale opacity-40 hover:opacity-60",
  },
  { type: "image", name: "FanDuel", src: "/sponsors/fanduel.svg" },
  { type: "image", name: "Claude", src: "/sponsors/claude.png" },
  { type: "image", name: "Equifax", src: "/sponsors/equifax.png" },
  { type: "image", name: "Gemini", src: "/sponsors/gemini.png" },
  { type: "image", name: "AWS", src: "/sponsors/aws.png" },
];

const LOOP_DURATION_SECONDS = 42.5;

export default function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const reducedMotionRef = useRef(false);
  const loopWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstSet = firstSetRef.current;

    if (!track || !firstSet) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncMotionPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;

      if (reducedMotionRef.current) {
        track.style.transform = "translate3d(0, 0, 0)";
      }
    };

    const measure = () => {
      loopWidthRef.current = firstSet.getBoundingClientRect().width;
      offsetRef.current %= loopWidthRef.current || 1;
    };

    const animate = (time: number) => {
      const loopWidth = loopWidthRef.current;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const deltaSeconds = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!reducedMotionRef.current && loopWidth > 0) {
        const speed = loopWidth / LOOP_DURATION_SECONDS;
        offsetRef.current = (offsetRef.current + speed * deltaSeconds) % loopWidth;
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    syncMotionPreference();
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(firstSet);

    mediaQuery.addEventListener("change", syncMotionPreference);
    window.addEventListener("resize", measure);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="relative w-full py-16 overflow-hidden">
      <Sparkles
        className="absolute inset-0 w-full h-full"
        density={300}
        speed={0.3}
        size={1}
        color="#a855f7"
        opacity={0.5}
        opacitySpeed={2}
      />

      <div className="relative z-10">
        <p
          className="text-center text-white/30 text-xs tracking-[0.3em] uppercase mb-10"
          style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
        >
          trusted by builders backed by
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-black via-black/95 to-transparent z-10" />

          <div ref={trackRef} className="flex w-max whitespace-nowrap items-center will-change-transform">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                ref={copyIndex === 0 ? firstSetRef : undefined}
                className="flex items-center"
                aria-hidden={copyIndex === 1}
              >
                {logos.map((logo) => (
                  <div
                    key={`${copyIndex}-${logo.name}`}
                    className="mx-10 flex-shrink-0 flex items-center justify-center"
                  >
                    {logo.type === "image" ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className={`w-auto object-contain transition-opacity duration-300 ${
                          logo.className ?? "h-7 brightness-0 invert opacity-30 hover:opacity-60"
                        }`}
                      />
                    ) : (
                      <span
                        className="text-white/30 text-2xl font-bold tracking-widest uppercase hover:text-white/60 transition-opacity duration-300"
                        style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
                      >
                        {logo.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
