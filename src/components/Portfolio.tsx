import type { Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/i18n";
import { About } from "./portfolio/About";
import { Footer } from "./portfolio/Footer";
import { Hero } from "./portfolio/Hero";
import { Now } from "./portfolio/Now";
import { SelectedWork } from "./portfolio/SelectedWork";

interface PortfolioProps {
  locale: Locale;
  saoPauloTime: string;
  updatedDate: string;
}

export function Portfolio({
  locale,
  saoPauloTime,
  updatedDate,
}: PortfolioProps) {
  const copy = getTranslation(locale);

  return (
    <>
      <a
        className="skip-link fixed left-4 top-4 z-50 -translate-y-24 bg-(--ink) px-4 py-3 font-mono text-xs uppercase tracking-widest text-white focus:translate-y-0"
        href="#main-content"
      >
        {copy.skip}
      </a>

      <main id="main-content">
        <Hero copy={copy} saoPauloTime={saoPauloTime} />
        <SelectedWork copy={copy} />
        <About copy={copy} />
        <Now copy={copy} updatedDate={updatedDate} />
        <Footer copy={copy} />
      </main>
    </>
  );
}
