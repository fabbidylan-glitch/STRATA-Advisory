import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Design B palette */
        primary: "#0F1B2D",
        ink: "#26323B",
        background: "#F5F0E6",
        cream: "#EDE5D5",
        surface: "#FCFAF4",
        border: "#E4DBCB",
        "border-dark": "#22304A",
        muted: "#8C8474",
        stone: "#9A917F",
        accent: "#B0824B",
        "accent-deep": "#8A6536",
        "accent-soft": "#E3C99F",
        "sage-deep": "#5D7F71",
        "secondary-deep": "#28382F",
        critical: "#A8443B",

        /* Legacy (Design A) tokens kept so inner pages keep rendering */
        charcoal: "#171717",
        ivory: "#F8F5EF",
        gold: "#B9975B",
        "gold-soft": "#C9A974",
        sand: "#D9C3A5",
        stone2: "#E7E1D8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "DM Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,27,45,0.05), 0 10px 30px -12px rgba(15,27,45,0.14)",
        "card-lg": "0 24px 60px -24px rgba(15,27,45,0.30)",
        soft: "0 1px 2px rgba(17,24,39,0.05), 0 16px 40px -20px rgba(17,24,39,0.18)",
      },
      maxWidth: {
        "62ch": "62ch",
      },
    },
  },
  plugins: [],
};

export default config;
