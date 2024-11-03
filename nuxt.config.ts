// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
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
    groups: [
      {
        userAgent: "*",
        disallow: "/api*",
      },
      {
        userAgent: "*",
        disallow: "/_nuxt*",
      },
      {
        userAgent: "*",
        disallow: "/_content*",
      },
      {
        userAgent: "*",
        disallow: "/cdn-cgi*", // Cloudflare
      },
    ],
  },
  site: {
    url: "https://vitoo.dev",
  },
  sitemap: {
    autoI18n: {
      locales: [
        {
          code: "en",
          _hreflang: "en-US",
          _sitemap: "./en/sitemap.xml",
        },
        {
          code: "pt",
          _hreflang: "pt-BR",
          _sitemap: "./pt/sitemap.xml",
        },
      ],
      defaultLocale: "pt",
      strategy: "prefix_except_default" as const,
    },
  },
  gtm: {
    id: "GTM-WBBDKPW7",
    debug: true,
  },
  tailwindcss: {
    configPath: "./tailwind.config.ts",
  },
  compatibilityDate: "2024-08-30",
});
