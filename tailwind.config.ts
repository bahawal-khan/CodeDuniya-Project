import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        cream: "#FBF6EC",
        night: "#12101C",
        nightcard: "#1A1628",
        nightsoft: "#221C36",
        ink: "#241B2F",
        saffron: {
          DEFAULT: "#F2A93B",
          soft: "#FBE3B6",
          dark: "#C87F1E",
          glow: "#F2A93B33",
        },
        rani: {
          DEFAULT: "#D6336C",
          soft: "#F6D3E1",
          dark: "#A81C50",
          glow: "#D6336C33",
        },
        teal: {
          DEFAULT: "#0E7C7B",
          soft: "#CDECEA",
          dark: "#095958",
          glow: "#0E7C7B33",
        },
        truckblue: {
          DEFAULT: "#1D4E89",
          soft: "#D7E4F3",
          dark: "#143A66",
        },
        tan: "#E9DDC4",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 20px -6px rgba(36, 27, 47, 0.12), 0 2px 8px -4px rgba(36, 27, 47, 0.08)",
        "card-hover": "0 12px 32px -8px rgba(36, 27, 47, 0.18), 0 4px 12px -4px rgba(36, 27, 47, 0.1)",
        cardDark: "0 4px 24px -6px rgba(0,0,0,0.45), 0 2px 8px -4px rgba(0,0,0,0.3)",
        "card-hover-dark": "0 12px 36px -8px rgba(0,0,0,0.55), 0 4px 14px -4px rgba(0,0,0,0.35)",
        glow: "0 0 24px -4px rgba(242, 169, 59, 0.35)",
        "glow-rani": "0 0 24px -4px rgba(214, 51, 108, 0.35)",
        "glow-teal": "0 0 24px -4px rgba(14, 124, 123, 0.35)",
        soft: "0 2px 12px -4px rgba(36, 27, 47, 0.08)",
      },
      backgroundImage: {
        "gradient-saffron": "linear-gradient(135deg, #F2A93B 0%, #D6336C 50%, #0E7C7B 100%)",
        "gradient-warm": "linear-gradient(135deg, #FBE3B6 0%, #F6D3E1 50%, #CDECEA 100%)",
        "gradient-hero": "linear-gradient(160deg, #FBF6EC 0%, #F6D3E1 40%, #CDECEA 100%)",
        "gradient-dark": "linear-gradient(160deg, #12101C 0%, #1A1628 50%, #221C36 100%)",
      },
      keyframes: {
        "swirl-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.92) translateY(10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "swirl-spin": "swirl-spin 1.1s linear infinite",
        "float-y": "float-y 3.6s ease-in-out infinite",
        "pop-in": "pop-in 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
