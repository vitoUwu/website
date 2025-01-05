import { Language } from "@/lib/languages";
import { getDictionary } from "@/lib/languages/dictionary";
import Section from "./Section";

function Line({ children }: { children: React.ReactNode }) {
  return <span className="flex">{children}</span>;
}

export default function About({ locale }: { locale: Language }) {
  const { about } = getDictionary(locale);
  return (
    <Section title={about.title} id="about">
      <p className="space-y-[1ch]">
        {about.description.map((line, index) => (
          <Line key={index}>{line}</Line>
        ))}
      </p>
      <ul className="flex justify-center gap-3 items-center pt-10">
        <li>
          <a href="https://github.com/vitouwu" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vitoo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/vitoodev" target="_blank" rel="noreferrer">
            twitter
          </a>
        </li>
      </ul>
    </Section>
  );
}
