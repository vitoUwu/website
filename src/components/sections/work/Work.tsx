import { Language } from "@/lib/languages";
import { getDictionary } from "@/lib/languages/dictionary";
import Section from "../Section";
import Item from "./Item";

const works = [
  {
    id: "deco",
    name: "Deco.cx",
    start: new Date("05/1/2024"),
    role: "fullstack",
  },
  {
    id: "itza",
    name: "ITZA Tech",
    start: new Date("08/1/2023"),
    end: new Date("04/1/2024"),
    role: "fullstack",
  },
] as const;

export default function Work({ locale }: { locale: Language }) {
  const dictionary = getDictionary(locale);
  return (
    <Section title="work" id="work">
      <ul className="space-y-5">
        {works.map((work) => (
          <Item
            work={{
              ...work,
              description: dictionary.work.works[work.id].description,
            }}
            key={work.name}
          />
        ))}
      </ul>
    </Section>
  );
}
