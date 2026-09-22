import type { Translation } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  copy: Translation;
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer
      id="contact"
      className="h-130 bg-(--ink) px-5 pb-7 pt-13 text-white md:h-140 md:px-16 md:pb-7 md:pt-17.5"
    >
      <p className="font-mono text-[9px] tracking-[0.12em] text-[#8b8b8b] md:text-xs">
        {copy.footer.index}
      </p>
      <div className="mt-11.5 md:mt-16 md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <h2 className="font-display whitespace-pre-line text-[65px] font-medium leading-[0.86] tracking-[-0.031em] md:text-[112px] md:leading-[0.84]">
          {copy.footer.title}
        </h2>
        <nav
          aria-label={copy.footer.navigation}
          className="mt-11.5 flex flex-col md:mt-0"
        >
          {copy.shared.socials.map((social) => (
            <a
              className="flex min-h-13.5 items-center border-t border-[#444] whitespace-pre font-mono text-[11px] leading-3.5 tracking-widest md:min-h-18.5 md:text-xs md:leading-4"
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target="_blank"
            >
              <span className="inline-flex items-center gap-3.25 md:gap-3.5">
                {social.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.25 md:size-3.5"
                />
              </span>
              <span className="sr-only">, {copy.newTab}</span>
            </a>
          ))}
        </nav>
      </div>
      <p className="mt-11.5 font-mono text-[8px] tracking-widest text-[#8b8b8b] md:mt-31.5 md:text-[9px]">
        {copy.footer.copyright}
      </p>
    </footer>
  );
}
