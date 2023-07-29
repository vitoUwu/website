/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-in-50": {
          from: {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          to: {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-100": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "19%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-200": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "26.6%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-300": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "33%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-400": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "38%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-500": {
          "0%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "43%": {
            opacity: 0,
            transform: "translateY(-5px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-50": "slide-in-50 1s",
        "slide-in-100": "slide-in-100 1.1s",
        "slide-in-200": "slide-in-200 1.2s",
        "slide-in-300": "slide-in-300 1.3s",
        "slide-in-400": "slide-in-400 1.4s",
        "slide-in-500": "slide-in-500 1.5s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
