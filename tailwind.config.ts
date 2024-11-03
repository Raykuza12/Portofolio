import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wave1: "wave 25s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite",
        wave2: "wave 20s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-25%,0,0)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: ["light", "dark", "cyberpunk", "aqua", "coffee"],
  },
};
export default config;
