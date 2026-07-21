import type { MetadataRoute } from "next";

const ROOT_URL = "https://vitoo.dev";

const languages = {
  "x-default": ROOT_URL,
  "pt-BR": ROOT_URL,
  "en-US": `${ROOT_URL}/en`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ROOT_URL,
      alternates: { languages },
    },
    {
      url: `${ROOT_URL}/en`,
      alternates: { languages },
    },
  ];
}
