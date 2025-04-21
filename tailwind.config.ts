import type { Config } from "tailwindcss";

// Külön függvény a hsl színek generálására
const generateColor = (name: string) => `hsl(var(--${name}))`;

// Színek külön fájlba szervezve a modularitás érdekében
const colors = {
  border: generateColor("border"),
  input: generateColor("input"),
  ring: generateColor("ring"),
  background: generateColor("background"),
  foreground: generateColor("foreground"),
  primary: {
    DEFAULT: generateColor("primary"),
    foreground: generateColor("primary-foreground"),
  },
  secondary: {
    DEFAULT: generateColor("secondary"),
    foreground: generateColor("secondary-foreground"),
  },
  destructive: {
    DEFAULT: generateColor("destructive"),
    foreground: generateColor("destructive-foreground"),
  },
  muted: {
    DEFAULT: generateColor("muted"),
    foreground: generateColor("muted-foreground"),
  },
  accent: {
    DEFAULT: generateColor("accent"),
    foreground: generateColor("accent-foreground"),
  },
  popover: {
    DEFAULT: generateColor("popover"),
    foreground: generateColor("popover-foreground"),
  },
  card: {
    DEFAULT: generateColor("card"),
    foreground: generateColor("card-foreground"),
  },
  sidebar: {
    DEFAULT: generateColor("sidebar-background"),
    foreground: generateColor("sidebar-foreground"),
    primary: generateColor("sidebar-primary"),
    "primary-foreground": generateColor("sidebar-primary-foreground"),
    accent: generateColor("sidebar-accent"),
    "accent-foreground": generateColor("sidebar-accent-foreground"),
    border: generateColor("sidebar-border"),
    ring: generateColor("sidebar-ring"),
  },
  sports: {
    blue: "#0ea5e9",
    "blue-dark": "#0284c7",
    green: "#10b981",
    "green-dark": "#059669",
    accent: "#f59e0b",
    "accent-dark": "#d97706",
  },
};

// Kulcskockák és animációk külön csoportosítva
const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    "fade-in": {
      "0%": { opacity: "0", transform: "translateY(10px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "fade-in-out": {
      "0%": { opacity: "0", transform: "translateY(10px)" },
      "50%": { opacity: "1", transform: "translateY(0)" },
      "100%": { opacity: "0", transform: "translateY(-10px)" },
    },
    "scale-in": {
      "0%": { opacity: "0", transform: "scale(0.95)" },
      "100%": { opacity: "1", transform: "scale(1)" },
    },
    "slide-up": {
      "0%": { opacity: "0", transform: "translateY(20px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    "slide-in-right": {
      "0%": { transform: "translateX(100%)", opacity: "0" },
      "100%": { transform: "translateX(0)", opacity: "1" },
    },
    shimmer: {
      "100%": { transform: "translateX(100%)" },
    },
    "blur-in": {
      "0%": { opacity: "0", filter: "blur(10px)" },
      "100%": { opacity: "1", filter: "blur(0)" },
    },
    "pulse-slow": {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.8" },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "fade-in": "fade-in 0.5s ease-out forwards",
    "fade-in-fast": "fade-in 0.3s ease-out forwards",
    "fade-in-out": "fade-in-out 2s ease-out infinite",
    "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    "slide-up": "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    shimmer: "shimmer 2s infinite",
    "blur-in": "blur-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
    "pulse-slow": "pulse-slow 3s ease-in-out infinite",
  },
};

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "", // Egyedi prefix hozzáadása, ha szükséges
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      ...animations,
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
