import { createFileRoute, notFound } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { getLocaleFromPath } from "@/lib/i18n";
import { Route as RootRoute } from "./__root";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!getLocaleFromPath(params.locale)) {
      throw notFound();
    }
  },
  component: LocalizedHomePage,
});

function LocalizedHomePage() {
  const { locale: localePath } = Route.useParams();
  const locale = getLocaleFromPath(localePath);
  const { saoPauloTime, updatedDate } = RootRoute.useLoaderData();

  if (!locale) {
    return null;
  }

  const canonicalUrl = `https://vitoo.dev/${localePath}`;
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: canonicalUrl,
    inLanguage: locale,
    mainEntity: {
      "@type": "Person",
      name: "Victor",
      alternateName: "vitoo",
      url: canonicalUrl,
      jobTitle:
        locale === "pt-BR"
          ? "Desenvolvedor Full-Stack"
          : "Full-Stack Developer",
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
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd),
        }}
        type="application/ld+json"
      />
      <Portfolio
        locale={locale}
        saoPauloTime={saoPauloTime}
        updatedDate={updatedDate}
      />
    </>
  );
}
