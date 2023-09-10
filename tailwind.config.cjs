/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-50": {
          from: {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          to: {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-100": {
          "0%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "19%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-200": {
          "0%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "26.6%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-300": {
          "0%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "33%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-400": {
          "0%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "38%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "slide-in-500": {
          "0%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "43%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0)",
          },
        },
        "fade-out-500": {
          "0%": {
            opacity: 100,
          },
          "43%": {
            opacity: 100,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-400": {
          "0%": {
            opacity: 0,
          },
          "38%": {
            opacity: 0,
          },
          "100%": {
            opacity: 100,
          },
        },
        "slide-out-50": {
          from: {
            opacity: 100,
            transform: "translateY(0)",
          },
          to: {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
        "slide-out-100": {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "19%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
        "slide-out-200": {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "26.6%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
        "slide-out-300": {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "33%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
        "slide-out-400": {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "38%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
        "slide-out-500": {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "43%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(calc(var(--slide-x)*-1))",
          },
        },
      },
      animation: {
        "fade-in-400": "fade-in-400 .8s",
        "fade-out-500": "fade-out-500 .8s forwards",
        "slide-in-50": "slide-in-50 .4s",
        "slide-in-100": "slide-in-100 .5s",
        "slide-in-200": "slide-in-200 .6s",
        "slide-in-300": "slide-in-300 .7s",
        "slide-in-400": "slide-in-400 .8s",
        "slide-in-500": "slide-in-500 .9s",
        "slide-out-50": "slide-out-50 .4s forwards",
        "slide-out-100": "slide-out-100 .5s forwards",
        "slide-out-200": "slide-out-200 .6s forwards",
        "slide-out-300": "slide-out-300 .7s forwards",
        "slide-out-400": "slide-out-400 .8s forwards",
        "slide-out-500": "slide-out-500 .9s forwards",
      },
    },
  },
  plugins: [],
};
