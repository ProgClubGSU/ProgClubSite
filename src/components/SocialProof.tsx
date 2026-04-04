import { Sparkles } from "@/components/ui/sparkles";

type LogoItem =
  | { type: "image"; name: string; src: string }
  | { type: "text"; name: string };

const logos: LogoItem[] = [
  { type: "image", name: "Cox", src: "/sponsors/cox.svg" },
  { type: "image", name: "Nexlayer", src: "/sponsors/nexlayer.png" },
  { type: "text", name: "ATDC" },
  { type: "image", name: "FanDuel", src: "/sponsors/fanduel.svg" },
  { type: "image", name: "Claude", src: "/sponsors/claude.png" },
  { type: "image", name: "Equifax", src: "/sponsors/equifax.png" },
  { type: "image", name: "Gemini", src: "/sponsors/gemini.png" },
  { type: "image", name: "AWS", src: "/sponsors/aws.png" },
];

export default function SocialProof() {
  const tripled = [...logos, ...logos, ...logos];

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

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap items-center">
            {tripled.map((logo, i) => (
              <div key={i} className="mx-10 flex-shrink-0 flex items-center justify-center">
                {logo.type === "image" ? (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto object-contain brightness-0 invert opacity-30 hover:opacity-60 transition-opacity duration-300"
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
        </div>
      </div>
    </div>
  );
}
