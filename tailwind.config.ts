import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F5F3EF",
          surface: "#FFFFFF",
          light: "#E5E3DF"
        },
        accent: {
          DEFAULT: "#B8892A",
          hover: "#D4A03A"
        },
        foreground: {
          DEFAULT: "#141414",
          secondary: "#4A4A4A",
          light: "#FFFFFF"
        },
        border: {
          subtle: "rgba(0,0,0,0.08)",
          accent: "rgba(184,137,42,0.4)"
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
