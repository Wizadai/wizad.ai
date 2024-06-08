import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        hero: ["var(--font-exo)"],
      },
      backgroundImage: {
        "hero-gradient": "url('/bg-hero-gradient.png')",
      },
      colors: {
        neutral: {
          920: "#131313"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
