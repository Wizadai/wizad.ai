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
          920: "#131313",
        },
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.625rem",
      "6xl": "3.5rem",
      "7xl": "4.25rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
