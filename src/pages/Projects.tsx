import { motion } from "framer-motion";
import { CONTRIBUITIONS, PROJECTS } from "../assets/constants";
import Title from "../components/Title";
import Card from "../components/card";

interface Project {
  name: string;
  detail?: string;
  description: string;
  url?: string;
  repoUrl?: string;
  technologies?: string[];
}

export function Projects() {
  return (
    <motion.div
      initial={{
        y: "-2%",
        opacity: 0,
      }}
      animate={{
        y: "0",
        opacity: 100,
      }}
      viewport={{
        once: true,
      }}
    >
      <section id="projects">
        <Title>Projetos</Title>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {PROJECTS.map((project: Project) => {
            return (
              <Card
                key={`${project.name}-${project.detail}`}
                title={project.name}
                description={project.description}
                subtitle={project.detail}
                url={project.url}
                repoUrl={project.repoUrl}
                technologies={project.technologies}
              />
            );
          })}
        </div>
      </section>
      <section id="contribuitions">
        <Title>Contribuições</Title>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {CONTRIBUITIONS.map((contribuition: Project) => {
            return (
              <Card
                key={`${contribuition.name}-${contribuition.detail}`}
                title={contribuition.name}
                description={contribuition.description}
                subtitle={contribuition.detail}
                url={contribuition.url}
                repoUrl={contribuition.repoUrl}
                technologies={contribuition.technologies}
              />
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
