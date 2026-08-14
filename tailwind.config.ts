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
        /* Surfaces */
        background: "#FBF8FB", // ivory with a lavender cast
        surface: "#FFFFFF",
        card: "#FFFFFF",
        border: "#EAE2F2",
        "border-strong": "#DCCFF0",

        /* Text */
        ink: "#2B2135", // deep plum — headings
        primary: "#2B2135", // alias kept for existing utilities
        body: "#4A3D57",
        secondary: "#6E6379", // muted body / captions

        /* Brand */
        accent: "#7C5AC2", // elegant purple
        "accent-deep": "#5B3E96",
        "accent-soft": "#EDE6F7",
        lavender: "#C4B0E4",
        "lavender-tint": "#F6F2FB",
        blush: "#F3C9DA",
        "blush-tint": "#FDF3F6",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(43, 33, 53, 0.06), 0 12px 32px -12px rgba(124, 90, 194, 0.14)",
        lift: "0 4px 12px -4px rgba(43, 33, 53, 0.08), 0 24px 48px -20px rgba(124, 90, 194, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 9s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
