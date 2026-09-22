import type { Translation } from "@/lib/i18n";
import { ArrowUpRight, Plus } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeroProps {
  copy: Translation;
  saoPauloTime: string;
}

const contactHref = "mailto:victorhugomeurerdelgrandi@gmail.com";

export function Hero({ copy, saoPauloTime }: HeroProps) {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenuOnOutsidePress = (event: PointerEvent) => {
      const menu = mobileMenuRef.current;

      if (menu?.open && !event.composedPath().includes(menu)) {
        menu.removeAttribute("open");
      }
    };

    document.addEventListener("pointerdown", closeMenuOnOutsidePress);
    return () =>
      document.removeEventListener("pointerdown", closeMenuOnOutsidePress);
  }, []);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-190 bg-(--surface) px-5 md:min-h-245 md:px-16"
    >
      <header className="absolute inset-x-5 top-6 flex h-8 items-center justify-between md:inset-x-16 md:top-10 md:h-12">
        <a
          className="font-display text-[22px] font-semibold leading-none md:text-[28px]"
          href="#main-content"
          aria-label="vitoo.dev"
        >
          vitoo<sup aria-hidden="true">®</sup>
        </a>

        <nav
          aria-label={copy.navigation}
          className="hidden items-center gap-8 font-mono text-xs lowercase tracking-widest md:flex"
        >
          <a href="#work">{copy.nav.work}</a>
          <a href="#about">{copy.nav.about}</a>
          <a href="#now">{copy.nav.now}</a>
          <a className="inline-flex items-center gap-1.5" href={contactHref}>
            {copy.nav.contact}
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </nav>

        <details className="mobile-menu relative md:hidden" ref={mobileMenuRef}>
          <summary
            className="flex min-h-11 cursor-pointer list-none items-center whitespace-pre font-mono text-[10px] leading-3.25 tracking-[0.11em]"
            aria-label={copy.openMenu}
          >
            <span aria-hidden="true" className="inline-flex items-center gap-3">
              {copy.nav.menu}
              <Plus size={12} />
            </span>
          </summary>
          <nav
            aria-label={copy.navigation}
            className="absolute right-0 top-11 z-20 flex min-w-40 flex-col border border-(--ink) bg-(--surface) p-2 font-mono text-xs lowercase"
          >
            <a className="px-3 py-3" href="#work" onClick={closeMobileMenu}>
              {copy.nav.work}
            </a>
            <a className="px-3 py-3" href="#about" onClick={closeMobileMenu}>
              {copy.nav.about}
            </a>
            <a className="px-3 py-3" href="#now" onClick={closeMobileMenu}>
              {copy.nav.now}
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-3 py-3"
              href={contactHref}
              onClick={closeMobileMenu}
            >
              {copy.nav.contact}
              <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </nav>
        </details>
      </header>

      <p className="absolute left-5 top-28 font-mono text-[9px] tracking-[0.11em] text-(--muted) md:left-16 md:top-41.5 md:text-xs md:tracking-[0.13em]">
        {copy.hero.eyebrow}
      </p>

      <h1
        id="hero-title"
        className="font-display absolute left-5 right-5 top-40 whitespace-pre-line text-[67px] font-medium leading-[0.84] tracking-[-0.037em] md:left-16 md:right-16 md:top-59.5 md:text-[clamp(8.5rem,12.5vw,11.25rem)] md:leading-[0.82] md:tracking-[-0.033em]"
      >
        {copy.hero.headline}
      </h1>

      <p className="absolute left-5 right-10 top-107.5 max-w-130 text-[17px] leading-[1.4] md:left-[50.7%] md:right-auto md:top-167.5 md:text-2xl md:leading-[1.32]">
        {copy.hero.intro}
      </p>

      <div className="absolute inset-x-5 bottom-13 flex h-22 flex-col justify-center gap-3 border-y border-(--ink) font-mono text-[9px] tracking-[0.08em] md:inset-x-16 md:bottom-18 md:h-20.5 md:flex-row md:items-center md:justify-between md:text-xs md:tracking-[0.09em]">
        <p className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-1.75 rounded-full bg-(--ink) md:size-2.25"
          />
          <span className="md:hidden">{copy.hero.availableShort}</span>
          <span className="hidden md:inline">{copy.hero.available}</span>
        </p>
        <p className="text-(--muted)">
          {copy.hero.current}
          <span className="hidden md:inline">
            {" "}
            — {copy.hero.location} {saoPauloTime}
          </span>
        </p>
      </div>
    </section>
  );
}
