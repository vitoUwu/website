import prose from "@tailwindcss/typography";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],
  site: {
    url: "https://vitoo.dev",
  },
  gtm: {
    id: "GTM-WBBDKPW7",
    debug: true,
  },
  tailwindcss: {
    configPath: "./tailwind.config.ts",
    config: {
      theme: {
        extend: {
          colors: {
            "coal-black": "#141517",
            "fog-gray": "#f2f4f7",
          },
          fontFamily: {
            jetbrains: ['"Jetbrains Mono"', "monospace"],
          },
        },
      },
      plugins: [prose],
      content: [],
    },
  },
  googleFonts: {
    families: {
      "JetBrains Mono": true,
    },
  },
});
