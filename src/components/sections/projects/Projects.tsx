import Section from "../Section";
import Item, { Project } from "./Item";

const projects: Project[] = [
  {
    name: "Deco bot",
    description:
      "Um bot para o Discord que cria notificações de pull requests do Github da deco.cx, define um revisor automaticamente e cria resumos de revisões no final do dia.",
    repository: "https://github.com/deco-cx/deco-bot",
  },
  {
    name: "Invest Tracker",
    description:
      "Um aplicativo para rastrear suas investimentos. Atualmente este projeto está fechado para o público mas é open source.",
    url: "https://invest.vitoo.dev",
    repository: "https://github.com/vitoUwu/invest-tracker",
  },
  {
    name: "In.orbit",
    description:
      "Um aplicativo sobre rastrear suas habilidades e metas semanais. Feito em um mini bootcamp chamado NLW da Rocketseat.",
    url: "http://nlw-pocket-web-production.up.railway.app/",
    repository: "https://github.com/vitoUwu/nlw-pocket-web",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projetos">
      <ul className="space-y-5">
        {projects.map((project) => (
          <Item key={project.name} project={project} />
        ))}
      </ul>
    </Section>
  );
}
