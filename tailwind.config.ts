import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- COULEURS OFFICIELLES ---
      colors: {
        "vert-principal": "#0B6B3A",
        "vert-secondaire": "#14532D",
        "vert-clair": "#D1FAE5",
        "vert-hover": "#094d2a",
        or: "#D4A017",
        "or-clair": "#FEF3C7",
        "or-hover": "#b8860f",
        rouge: "#C62828",
        "rouge-clair": "#FEE2E2",
        "noir-parti": "#111827",
        "gris-doux": "#F9FAFB",
        "gris-moyen": "#6B7280",
        "gris-bordure": "#E5E7EB",
      },

      // --- TYPOGRAPHIE ---
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },

      // --- TAILLES DE POLICE ---
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },

      // --- ESPACEMENT PERSONNALIS� ---
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },

      // --- BORDER RADIUS ---
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // --- OMBRES ---
      boxShadow: {
        "parti-sm": "0 2px 8px rgba(11, 107, 58, 0.12)",
        "parti-md": "0 4px 20px rgba(11, 107, 58, 0.15)",
        "parti-lg": "0 8px 40px rgba(11, 107, 58, 0.20)",
        "or-sm": "0 2px 8px rgba(212, 160, 23, 0.20)",
        "or-md": "0 4px 20px rgba(212, 160, 23, 0.25)",
        "card": "0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.10), 0 12px 32px rgba(0,0,0,0.08)",
        "hero": "0 20px 60px rgba(0,0,0,0.3)",
      },

      // --- ANIMATIONS ---
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "pulse-or": "pulseOr 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },

      // --- KEYFRAMES ---
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseOr: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 160, 23, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212, 160, 23, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },

      // --- TRANSITIONS ---
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      // --- HAUTEUR ---
      height: {
        "screen-90": "90vh",
        "screen-80": "80vh",
        "screen-70": "70vh",
      },

      // --- LARGEUR MAX ---
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      // --- Z-INDEX ---
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;