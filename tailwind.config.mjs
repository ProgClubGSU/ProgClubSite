/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "star-btn": "star-btn calc(var(--duration)*1s) linear infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "star-btn": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
