export interface Project {
  name: string;
  description: string;
  url?: string;
  repository?: string;
}

export default function Item({ project }: { project: Project }) {
  return (
    <li>
      <h3 className="text-neutral-300 text-base font-newsreader">
        {project.name}
      </h3>
      <p>{project.description}</p>
      {(project.url || project.repository) && (
        <div className="flex gap-3 underline text-neutral-300 text-xs mt-1">
          {project.url && (
            <a target="_blank" rel="noopener noreferrer" href={project.url}>
              ver
            </a>
          )}
          {project.repository && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.repository}
            >
              repositório
            </a>
          )}
        </div>
      )}
    </li>
  );
}
