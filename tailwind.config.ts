import type { Config } from "tailwindcss";
import prose from "@tailwindcss/typography";

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "coal-black": "#141517",
        "fog-gray": "#f2f4f7",
      },
      fontFamily: {
        lora: ['"Lora"', "monospace"],
      },
    },
  },
  plugins: [prose()],
  content: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
