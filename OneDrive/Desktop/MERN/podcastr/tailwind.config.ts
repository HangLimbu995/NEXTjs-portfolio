import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          1: "#FFFFFF",
          2: "rgba(255, 255, 255, 0.72)",
          3: "rgba(255, 255, 255, 0.4)",
          4: "rgba(255, 255, 255, 0.64)",
          5: "rgba(255, 255, 255, 0.80)",
        },
        black: {
          1: "#15171C",
          2: "#222429",
          3: "#101114",
          4: "#252525",
          5: "#2E3036",
          6: "#24272C",
        },
        orange: {
          1: "#F97535",
        },
        gray: {
          1: "#71788B",
        },
      },
      backgroundImage: {
        "nav-focus":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
