"use client";

import { ProjectCard } from "@/components/ProjectCard";
import projects from "@/lib/projects";

export default function Projects() {
  return (
    <main className="flex min-h-screen justify-center items-center mx-3 md:mx-16 my-16">
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}
