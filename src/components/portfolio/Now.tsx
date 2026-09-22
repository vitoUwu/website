import type { Translation } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

interface NowProps {
  copy: Translation;
  updatedDate: string;
}

export function Now({ copy, updatedDate }: NowProps) {
  const signals = [
    {
      ...copy.now.building,
      href: "https://github.com/vitouwu",
    },
    {
      ...copy.now.reading,
      href: "https://www.reinventingorganizations.com/",
    },
  ];

  return (
    <section
      id="now"
      aria-labelledby="now-title"
      className="min-h-212.5 scroll-mt-0 bg-(--soft) px-5 py-13 md:min-h-220 md:px-16 md:py-18"
    >
      <div className="flex items-start justify-between font-mono text-[9px] tracking-widest text-(--muted) md:text-xs">
        <p>{copy.now.index}</p>
        <p className="text-[8px] md:text-[11px]">
          <span className="hidden md:inline">{copy.now.updated} </span>
          {updatedDate}
        </p>
      </div>

      <h2
        id="now-title"
        className="font-display mt-8.5 max-w-131.25 whitespace-pre-line text-[45px] font-medium leading-[0.95] tracking-[-0.027em] md:mt-16 md:text-[74px]"
      >
        {copy.now.title}
      </h2>

      <div className="mt-8.5 grid md:mt-16 md:grid-cols-2">
        {signals.map((signal) => (
          <article
            className="min-h-55 border-t border-[#bdbdb8] py-5 md:min-h-75 md:pr-7 md:pt-6.5"
            key={signal.label}
          >
            <p className="font-mono text-[9px] tracking-[0.11em] text-(--muted) md:text-[11px]">
              {signal.label}
            </p>
            <h3 className="font-display mt-3.5 text-[27px] leading-[1.04] md:mt-5.5 md:text-[30px]">
              {signal.title}
            </h3>
            <p className="mt-3.5 max-w-157 text-sm leading-[1.42] text-(--muted) md:mt-5.5 md:text-[15px]">
              {signal.body}
            </p>
            <a
              className="mt-3.5 inline-flex min-h-11 items-center font-mono text-[9px] leading-3 tracking-widest md:mt-5.5 md:text-[11px] md:leading-3.5"
              href={signal.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="inline-flex items-center gap-2.5 md:gap-3">
                {signal.link}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3 md:size-3.5"
                />
              </span>
              <span className="sr-only">
                , {signal.title}, {copy.newTab}
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
