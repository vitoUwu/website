export interface Project {
  name: string;
  description: string[];
  url?: string;
  repository?: string;
}

export default function Item({
  project,
  view,
  repository,
}: {
  project: Project;
  view: string;
  repository: string;
}) {
  return (
    <li>
      <h3 className="text-neutral-300 text-base font-newsreader">
        {project.name}
      </h3>
      <p className="flex flex-col gap-[1ch]">
        {project.description.map((description, index) => (
          <span key={index}>{description}</span>
        ))}
      </p>
      {(project.url || project.repository) && (
        <div className="flex gap-3 underline text-neutral-300 text-xs mt-1">
          {project.url && (
            <a target="_blank" rel="noopener noreferrer" href={project.url}>
              {view}
            </a>
          )}
          {project.repository && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.repository}
            >
              {repository}
            </a>
          )}
        </div>
      )}
    </li>
  );
}
