import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        charcoal: "#171717",
        ink: "#111827",
        ivory: "#F8F5EF",
        sand: "#D9C3A5",
        gold: "#B9975B",
        "gold-soft": "#C9A974",
        stone: "#E7E1D8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -8px rgba(17,24,39,0.10)",
        soft: "0 1px 2px rgba(17,24,39,0.05), 0 16px 40px -20px rgba(17,24,39,0.18)",
      },
      backgroundImage: {
        "ivory-fade":
          "radial-gradient(1200px 600px at 80% -10%, rgba(217,195,165,0.25), transparent 60%), radial-gradient(800px 400px at -10% 10%, rgba(185,151,91,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
