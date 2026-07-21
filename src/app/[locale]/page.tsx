import Header from "@/components/Header";
import About from "@/components/sections/About";
import Library from "@/components/sections/library/Library";
import Projects from "@/components/sections/projects/Projects";
import Spotify from "@/components/sections/spotify/Spotify";
import Work from "@/components/sections/work/Work";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LANGUAGES,
  withLocaleParam,
} from "@/lib/languages";
import { getDictionary } from "@/lib/languages/dictionary";
import { Metadata } from "next";

const TITLE = "vitoo";
const ROOT_URL = "https://vitoo.dev";
const OG_IMAGE = "/android-chrome-512x512.png";

export async function generateMetadata(
  props: withLocaleParam
): Promise<Metadata> {
  const { locale } = await props.params;
  const { about } = getDictionary(locale);

  const language =
    SUPPORTED_LANGUAGES.find((lang) => lang.inPath === locale) ??
    DEFAULT_LOCALE;
  const title =
    language.value === "pt-BR"
      ? "vitoo — desenvolvedor full stack"
      : "vitoo — full stack developer";
  const description = about.description[0];
  const url =
    language.value === DEFAULT_LOCALE.value
      ? ROOT_URL
      : `${ROOT_URL}/${language.inPath}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: TITLE,
      type: "website",
      locale: language.value.replace("-", "_"),
      images: [{ url: OG_IMAGE, width: 512, height: 512, alt: TITLE }],
    },
    twitter: {
      card: "summary",
      creator: "@vitoodev",
      title,
      description,
      images: [OG_IMAGE],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: url,
      languages: {
        "x-default": ROOT_URL,
        [DEFAULT_LOCALE.hreflang]: ROOT_URL,
        ...SUPPORTED_LANGUAGES.filter(
          (language) =>
            language.enabled && language.value !== DEFAULT_LOCALE.value
        )
          .map((language) => ({
            hreflang: language.hreflang,
            url: `${ROOT_URL}/${language.inPath}`,
          }))
          .reduce<Record<string, string>>((acc, curr) => {
            acc[curr.hreflang] = curr.url;
            return acc;
          }, {}),
      },
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Victor",
  alternateName: "vitoo",
  url: ROOT_URL,
  image: `${ROOT_URL}${OG_IMAGE}`,
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Deco.cx",
    url: "https://deco.cx",
  },
  sameAs: [
    "https://github.com/vitouwu",
    "https://www.linkedin.com/in/vitoo/",
    "https://x.com/vitoodev",
  ],
};

export default async function Home({ params }: withLocaleParam) {
  const { locale } = await params;

  return (
    <main className="max-w-2xl mx-auto w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header locale={locale} />
      <About locale={locale} />
      <Work locale={locale} />
      <Projects locale={locale} />
      <Library />
      <Spotify />
    </main>
  );
}
