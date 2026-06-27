import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: "#4A7C59", "olive-dark": "#3A6249", "olive-light": "#EBF5EE",
        gold: "#C9A84C", "gold-light": "#FBF5E6",
        navy: "#1B2A4A", muted: "#6B7280", light: "#F8F9FA",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
