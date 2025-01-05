import { Language } from "@/lib/languages";
import { getDictionary } from "@/lib/languages/dictionary";
import Section from "../Section";
import Item from "./Item";

const projects = [
  {
    name: "Deco bot",
    id: "decobot",
    repository: "https://github.com/deco-cx/deco-bot",
  },
  {
    name: "Invest Tracker",
    id: "invest",
    url: "https://invest.vitoo.dev",
    repository: "https://github.com/vitoUwu/invest-tracker",
  },
  {
    name: "In.orbit",
    id: "inorbit",
    url: "http://nlw-pocket-web-production.up.railway.app/",
    repository: "https://github.com/vitoUwu/nlw-pocket-web",
  },
] as const;

export default function Projects({ locale }: { locale: Language }) {
  const { projects: projectsDict } = getDictionary(locale);
  return (
    <Section id="projects" title={projectsDict.title}>
      <ul className="space-y-5">
        {projects.map((project) => (
          <Item
            key={project.name}
            project={{
              ...project,
              description: projectsDict.projects[project.id].description,
            }}
            view={projectsDict.view}
            repository={projectsDict.repository}
          />
        ))}
      </ul>
    </Section>
  );
}
