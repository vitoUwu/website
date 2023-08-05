import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/lib/projects";
import { Metadata } from "next";

const title = "vitoo | Projects";
const description = `A summary with ${projects.length} created projects`;

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    title,
    description,
  },
  openGraph: {
    title,
    description,
  },
};

export default function Projects() {
  return (
    <main className="flex min-h-screen justify-center items-center mx-3 md:mx-16 my-16">
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title + project.description}
            project={project}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
