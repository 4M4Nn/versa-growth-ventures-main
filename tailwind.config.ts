import type { Config } from "tailwindcss"

// Tailwind v4 reads design tokens from the @theme block in src/app/globals.css.
// This file documents the brand palette and fonts for tooling that expects a config.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3eee4",
        ink: "#15130f",
        spice: "#a8431f",
        ocean: "#0f4c5c",
        brass: "#b08a3e",
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-instrument)"],
        mono: ["var(--font-jetbrains)"],
      },
    },
  },
}

export default config
