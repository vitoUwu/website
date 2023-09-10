/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
				"-slide-in-50": {
					from: {
						opacity: 0,
						transform: "translateY(5px)",
					},
					to: {
						opacity: 100,
						transform: "translateY(0)",
					},
				},
				"-slide-in-100": {
					"0%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"19%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"100%": {
						opacity: 100,
						transform: "translateY(0)",
					},
				},
				"-slide-in-200": {
					"0%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"26.6%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"100%": {
						opacity: 100,
						transform: "translateY(0)",
					},
				},
				"-slide-in-300": {
					"0%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"33%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"100%": {
						opacity: 100,
						transform: "translateY(0)",
					},
				},
				"-slide-in-400": {
					"0%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"38%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"100%": {
						opacity: 100,
						transform: "translateY(0)",
					},
				},
				"-slide-in-500": {
					"0%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"43%": {
						opacity: 0,
						transform: "translateY(5px)",
					},
					"100%": {
						opacity: 100,
						transform: "translateY(0)",
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
				}
			},
			animation: {
				"fade-in-400": "fade-in-400 1.4s",
				"slide-in-50": "slide-in-50 1s",
				"slide-in-100": "slide-in-100 1.1s",
				"slide-in-200": "slide-in-200 1.2s",
				"slide-in-300": "slide-in-300 1.3s",
				"slide-in-400": "slide-in-400 1.4s",
				"slide-in-500": "slide-in-500 1.5s",
				"-slide-in-50": "-slide-in-50 1s",
				"-slide-in-100": "-slide-in-100 1.1s",
				"-slide-in-200": "-slide-in-200 1.2s",
				"-slide-in-300": "-slide-in-300 1.3s",
				"-slide-in-400": "-slide-in-400 1.4s",
				"-slide-in-500": "-slide-in-500 1.5s",
			},
		},
	},
	plugins: [],
}
