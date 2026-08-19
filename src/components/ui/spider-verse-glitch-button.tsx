interface SpiderVerseGlitchButtonProps {
  href: string;
  text: string;
  external?: boolean;
}

export const Component = ({ href, text, external = false }: SpiderVerseGlitchButtonProps) => {
  return (
    <div className="glitch-button-wrapper relative group inline-block transform-gpu transition-transform duration-200 ease-out">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="spiderverse-button relative inline-block px-6 py-2.5 text-xs md:text-sm font-bold border-none rounded-full cursor-pointer bg-white text-black tracking-widest transform-gpu transition-all duration-150 ease-out"
        style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
      >
        {text}

        {/* Glitch Layers Container */}
        <div className="glitch-layers absolute top-0 left-0 w-full h-full">
          {/* Layer 1 */}
          <div className="glitch-layer layer-1 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full opacity-0 transition-all duration-150 origin-center" style={{ color: "#571294" }}>
            {text}
          </div>

          {/* Layer 2 */}
          <div className="glitch-layer layer-2 absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white rounded-full opacity-0 transition-all duration-150 origin-center" style={{ color: "#200438" }}>
            {text}
          </div>
        </div>

        {/* Noise Effect */}
        <div className="noise absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none opacity-0 transition-opacity duration-300
          bg-[repeating-radial-gradient(circle_at_50%_50%,_transparent_0,_rgba(0,0,0,0.1)_1px,_transparent_2px)]">
        </div>

        {/* Scanning Slice */}
        <div className="glitch-slice absolute w-[120%] h-[5px] bg-white opacity-0"></div>
      </a>

      <style>{`
        .glitch-button-wrapper:hover .layer-1 {
          opacity: 1;
          animation: glitchLayer1 0.4s steps(2) infinite;
        }

        .glitch-button-wrapper:hover .layer-2 {
          opacity: 1;
          animation: glitchLayer2 0.4s steps(2) infinite;
        }

        .glitch-button-wrapper:hover .spiderverse-button {
          animation: buttonGlitch 0.3s steps(2) infinite;
          box-shadow:
            0 0 20px rgba(255, 255, 255, 0.5),
            0 0 30px rgba(87, 18, 148, 0.6),
            0 0 40px rgba(32, 4, 56, 0.6);
        }

        .glitch-button-wrapper:hover .noise {
          opacity: 1;
        }

        .noise {
          animation: noise 0.2s steps(2) infinite;
        }

        .glitch-slice {
          animation: slice 3s linear infinite;
        }

        @keyframes buttonGlitch {
          0% { transform: translate(0) scale(1.1); }
          25% { transform: translate(-10px, 5px) scale(1.15) skew(-5deg); }
          50% { transform: translate(10px, -5px) scale(1.1) skew(5deg); }
          75% { transform: translate(-15px, -5px) scale(1.05) skew(-3deg); }
          100% { transform: translate(0) scale(1.1); }
        }

        @keyframes glitchLayer1 {
          0% {
            transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
          25% {
            transform: translate(20px, 10px) scale(1.2) skew(10deg);
            clip-path: polygon(0 30%, 100% 30%, 100% 60%, 0 60%);
          }
          50% {
            transform: translate(-15px, 5px) scale(0.9) skew(-5deg);
            clip-path: polygon(0 10%, 100% 10%, 100% 40%, 0 40%);
          }
          75% {
            transform: translate(15px, -5px) scale(1.3) skew(5deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          100% {
            transform: translate(-20px, -10px) scale(1.1) skew(-10deg);
            clip-path: polygon(0 20%, 100% 20%, 100% 50%, 0 50%);
          }
        }

        @keyframes glitchLayer2 {
          0% {
            transform: translate(20px, 10px) scale(1.1) skew(10deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
          25% {
            transform: translate(-20px, -10px) scale(1.2) skew(-10deg);
            clip-path: polygon(0 60%, 100% 60%, 100% 90%, 0 90%);
          }
          50% {
            transform: translate(15px, -5px) scale(0.9) skew(5deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 70%, 0 70%);
          }
          75% {
            transform: translate(-15px, 5px) scale(1.3) skew(-5deg);
            clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
          }
          100% {
            transform: translate(20px, 10px) scale(1.1) skew(10deg);
            clip-path: polygon(0 50%, 100% 50%, 100% 80%, 0 80%);
          }
        }

        @keyframes noise {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(10%, 5%); }
          30% { transform: translate(-5%, 10%); }
          40% { transform: translate(15%, -5%); }
          50% { transform: translate(-10%, 15%); }
          60% { transform: translate(5%, -10%); }
          70% { transform: translate(-15%, 5%); }
          80% { transform: translate(10%, 10%); }
          90% { transform: translate(-5%, 15%); }
          100% { transform: translate(0, 0); }
        }

        @keyframes slice {
          0% { top: -10%; opacity: 0; }
          1% { opacity: 0.5; }
          3% { opacity: 0; }
          50% { top: 110%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};
