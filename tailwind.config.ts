import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "text-color-change": {
          to: {
            color: "#ff0266",
          },
        },
        "bounce-dot-1": {
          "0%, 80%, 100%": { opacity: "0" },
          "20%": { opacity: "1" },
        },
        "bounce-dot-2": {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
        "bounce-dot-3": {
          "0%, 80%, 100%": { opacity: "0" },
          "80%": { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "text-color-change-1":
          "text-color-change 1s infinite ease-in-out alternate 0s",
        "text-color-change-2":
          "text-color-change 1s infinite ease-in-out alternate 0.2s",
        "text-color-change-3":
          "text-color-change 1s infinite ease-in-out alternate 0.4s",
        "text-color-change-4":
          "text-color-change 1s infinite ease-in-out alternate 0.6s",
        "text-color-change-5":
          "text-color-change 1s infinite ease-in-out alternate 0.8s",
        "text-color-change-6":
          "text-color-change 1s infinite ease-in-out alternate 1.0s",
        "text-color-change-7":
          "text-color-change 1s infinite ease-in-out alternate 1.2s",
        "text-color-change-8":
          "text-color-change 1s infinite ease-in-out alternate 1.4s",
        "bounce-dot-1": "bounce-dot-1 1.4s infinite",
        "bounce-dot-2": "bounce-dot-2 1.4s infinite",
        "bounce-dot-3": "bounce-dot-3 1.4s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
