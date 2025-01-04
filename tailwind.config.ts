import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coal-black": "#141517",
        "fog-gray": "#f2f4f7",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        newsreader: ["var(--font-newsreader)"],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
