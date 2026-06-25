import type { Config } from "tailwindcss"
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080E08", "bg-alt": "#0C1A0E",
        olive: "#4A7C59", "olive-light": "#8FBC5A",
        gold: "#C9A84C", "gold-light": "#E8C96A",
        "off-white": "#F0EDE6", gray: "#A8B89A", "gray-muted": "#5A6B5C",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
