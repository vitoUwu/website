/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { DEFAULT_LOCALE, getLocalePath, getTranslation } from "@/lib/i18n";
import { getVisitorContext } from "@/lib/visitor";
import globalCss from "@/styles/global.css?url";

const ROOT_URL = "https://vitoo.dev";

export const Route = createRootRoute({
  loader: () => getVisitorContext(),
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? DEFAULT_LOCALE;
    const { meta } = getTranslation(locale);
    const localePath = getLocalePath(locale);
    const canonicalUrl = `${ROOT_URL}/${localePath}`;
    const alternateLocale = locale === "en-US" ? "pt_BR" : "en_US";

    return {
      meta: [
        { charSet: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:locale", content: locale.replace("-", "_") },
        { property: "og:locale:alternate", content: alternateLocale },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "@vitoodev" },
        { name: "theme-color", content: "#ffffff" },
      ],
      links: [
        { rel: "stylesheet", href: globalCss },
        { rel: "canonical", href: canonicalUrl },
        {
          rel: "alternate",
          hrefLang: "en-US",
          href: `${ROOT_URL}/en`,
        },
        {
          rel: "alternate",
          hrefLang: "pt-BR",
          href: `${ROOT_URL}/pt`,
        },
        { rel: "alternate", hrefLang: "x-default", href: ROOT_URL },
        { rel: "icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    };
  },
  component: RootLayout,
});

function RootLayout() {
  const { locale } = Route.useLoaderData();

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
