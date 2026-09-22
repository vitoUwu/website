import type { Translation } from "@/lib/i18n";

interface AboutProps {
  copy: Translation;
}

export function About({ copy }: AboutProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="min-h-295 scroll-mt-0 bg-(--surface) px-5 py-13 md:min-h-280 md:px-16 md:py-18"
    >
      <p className="font-mono text-[9px] tracking-[0.12em] text-(--muted) md:text-xs">
        {copy.about.index}
      </p>

      <div className="mt-9 md:mt-14 md:grid md:grid-cols-[1.22fr_0.78fr] md:gap-12">
        <h2
          id="about-title"
          className="font-display whitespace-pre-line text-[68px] font-medium leading-[0.84] tracking-[-0.035em] md:text-[145px] md:leading-[0.86] md:tracking-[-0.031em]"
        >
          {copy.about.title}
        </h2>

        <div className="mt-9 md:mt-8">
          <p className="font-display text-[34px] font-medium leading-[1.02] md:text-[43px] md:leading-[1.03]">
            {copy.about.lead}
          </p>
          <p className="mt-7 text-base leading-[1.48] text-(--muted) md:text-lg md:leading-normal">
            <span className="md:hidden">{copy.about.bodyShort}</span>
            <span className="hidden md:inline">{copy.about.body}</span>
          </p>
          <ol className="mt-8 flex flex-col gap-4 font-mono text-[10px] tracking-widest md:mt-7 md:gap-4.5 md:text-xs">
            {copy.about.principles.map((principle, index) => (
              <li className="flex gap-5 md:gap-7" key={principle}>
                <span className="text-(--muted)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-9.5 border-t border-(--ink) pt-6 md:mt-49 md:grid md:grid-cols-[250px_1fr_1fr] md:gap-16 md:pt-0">
        <p className="font-mono text-[9px] tracking-[0.12em] text-(--muted) md:text-xs">
          {copy.about.experience}
        </p>
        {copy.shared.experience.map((experience, index) => (
          <div
            className="mt-7 flex flex-col gap-2 md:mt-0 md:gap-3.5 md:pt-6.5"
            key={experience.company}
          >
            <p className="font-mono text-[9px] tracking-[0.08em] text-(--muted) md:text-[11px]">
              {experience.period}
            </p>
            <h3 className="font-display text-[28px] md:text-[34px]">
              {experience.company}
            </h3>
            <p className="font-mono text-[9px] tracking-[0.09em] text-(--muted) md:text-[11px]">
              {copy.about.roles[index]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
