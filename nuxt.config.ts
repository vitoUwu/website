import prose from "@tailwindcss/typography";
import repos from "./utils/repos";

const autoI18n = {
  locales: [
    {
      code: "en",
    },
    {
      code: "pt",
    },
  ],
  defaultLocale: "pt",
  strategy: "prefix_except_default" as const,
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  nitro: {
    preset: "vercel",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-fonts",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
    vueI18n: "./i18n.config.ts",
  },
  robots: {
    rules: [
      {
        UserAgent: "*",
        Disallow: "/api*",
      },
      {
        UserAgent: "*",
        Disallow: "/_nuxt*",
      },
      {
        UserAgent: "*",
        Disallow: "/_content*",
      },
      {
        UserAgent: "*",
        Disallow: "/cdn-cgi*", // Cloudflare
      },
    ],
  },
  site: {
    url: "https://vitoo.dev",
  },
  sitemap: {
    autoI18n,
    urls: async function () {
      const urls = [];
      for (const { href } of Object.values(repos)) {
        for (const { code } of autoI18n.locales) {
          if (code === autoI18n.defaultLocale) {
            urls.push({
              loc: `/project/${href.split("/").pop()}`,
            });
          } else {
            urls.push({
              loc: `/${code}/project/${href.split("/").pop()}`,
            });
          }
        }
      }

      return urls;
    },
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
      future: {
        hoverOnlyWhenSupported: true,
      },
    },
  },
  googleFonts: {
    families: {
      "JetBrains Mono": true,
    },
  },
});
