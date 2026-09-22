import type { Translation } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

interface SelectedWorkProps {
  copy: Translation;
}

export function SelectedWork({ copy }: SelectedWorkProps) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="min-h-275 scroll-mt-0 bg-(--ink) px-5 py-13 text-white md:min-h-295 md:px-16 md:py-18"
    >
      <div className="flex flex-col gap-4.5 md:flex-row md:justify-between">
        <p className="font-mono text-[9px] tracking-[0.12em] text-[#9a9a9a] md:text-xs md:text-white">
          {copy.work.index}
        </p>
        <p className="max-w-102.5 text-sm leading-[1.4] text-[#a8a8a8] md:text-lg md:leading-[1.35]">
          <span className="md:hidden">{copy.work.noteShort}</span>
          <span className="hidden md:inline">{copy.work.note}</span>
        </p>
      </div>

      <h2
        id="work-title"
        className="font-display mt-10.5 whitespace-pre-line text-[64px] font-medium leading-[0.85] tracking-[-0.034em] md:mt-18 md:text-[150px] md:leading-[0.82] md:tracking-[-0.033em]"
      >
        <span className="md:hidden">{copy.work.mobileTitle}</span>
        <span className="hidden md:inline">{copy.work.title}</span>
      </h2>

      <ul aria-label={copy.work.projectLabel} className="mt-10.5 md:mt-17.75">
        {copy.shared.projects.map((project, index) => (
          <li
            key={project.name}
            className="h-56.25 border-t border-[#444] md:h-47.5"
          >
            <div className="flex h-full flex-col gap-3 py-5.25 md:grid md:grid-cols-[170px_minmax(0,1fr)_250px_19px] md:content-center md:items-center md:gap-0 md:py-0">
              <span className="flex h-6.5 shrink-0 justify-between md:contents">
                <span className="mt-1.75 font-mono text-[9px] leading-3 tracking-[0.08em] text-[#8b8b8b] md:col-start-1 md:row-start-1 md:mt-0 md:text-[11px] md:leading-3.5 md:tracking-[0.11em]">
                  {project.period}
                </span>
                <span className="flex h-6.5 w-3.25 items-center justify-center md:col-start-4 md:row-start-1 md:h-9.75 md:w-4.75">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4.5 max-w-none shrink-0 md:size-6"
                  />
                </span>
              </span>
              <span className="flex flex-col gap-3 md:col-start-2 md:row-start-1 md:gap-2.5">
                <span className="font-display text-[29px] leading-none md:text-[40px]">
                  {project.links.map((link, linkIndex) => (
                    <span key={link.href}>
                      <a
                        className="project-link"
                        href={link.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}
                        <span className="sr-only">, {copy.newTab}</span>
                      </a>
                      {linkIndex < project.links.length - 1 ? " / " : null}
                    </span>
                  ))}
                </span>
                <span className="text-sm leading-[1.35] text-[#a8a8a8] md:text-base md:leading-[1.3125]">
                  {copy.work.descriptions[index]}
                </span>
              </span>
              <span className="font-mono text-[8px] leading-2.5 tracking-[0.09em] text-[#8b8b8b] md:col-start-3 md:row-start-1 md:text-[11px] md:leading-3.5 md:tracking-[0.09em]">
                {project.stack}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
