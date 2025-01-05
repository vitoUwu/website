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

export async function generateMetadata(
  props: withLocaleParam
): Promise<Metadata> {
  const { locale } = await props.params;
  const { about } = getDictionary(locale);

  const description = about.description[0];
  const url =
    !locale || locale === DEFAULT_LOCALE.value
      ? ROOT_URL
      : `${ROOT_URL}/${locale}`;

  return {
    title: TITLE,
    description,
    openGraph: {
      title: TITLE,
      description,
      url,
    },
    twitter: {
      card: "summary",
      creator: "@vitoodev",
      title: TITLE,
      description,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: url,
      languages: {
        [DEFAULT_LOCALE.value]: ROOT_URL,
        ...SUPPORTED_LANGUAGES.filter(
          (language) =>
            language.enabled && language.value !== DEFAULT_LOCALE.value
        )
          .map((language) => ({
            hreflang: language.hreflang,
            url: `${ROOT_URL}${language.inPath}`,
          }))
          .reduce<Record<string, string>>((acc, curr) => {
            acc[curr.hreflang] = curr.url;
            return acc;
          }, {}),
      },
    },
  };
}

export default async function Home({ params }: withLocaleParam) {
  const { locale } = await params;

  return (
    <main className="max-w-2xl mx-auto w-full">
      <Header locale={locale} />
      <About locale={locale} />
      <Work locale={locale} />
      <Projects locale={locale} />
      <Library />
      <Spotify />
    </main>
  );
}
