import Button from "../Button";
import { Technology } from "./technology";
interface Props {
  title: string;
  subtitle?: string;
  description: string;
  url?: string;
  repoUrl?: string;
  technologies?: string[];
}

export default function Card({
  title,
  subtitle,
  description,
  url,
  repoUrl,
  technologies,
}: Props) {
  return (
    <div className="transition-colors dark:bg-zinc-900 bg-zinc-100 w-full h-full shadow-xl border-[1px] dark:border-zinc-800 border-zinc-300 flex flex-col justify-between rounded py-4 px-6">
      <div>
        <div className="flex gap-2 items-end">
          <h1 className="text-xl font-bold inline-block">{title}</h1>
          {subtitle && (
            <h2 className="font-normal text-sm dark:text-zinc-500 text-zinc-500">
              {" "}
              {subtitle}
            </h2>
          )}
        </div>
        <p>{description}</p>
      </div>
      <div className="flex items-end gap-2 mt-4">
        {url && (
          <Button asChild>
            <a target={"_blank"} href={url}>
              Link
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button asChild>
            <a target={"_blank"} href={repoUrl}>
              Repositório
            </a>
          </Button>
        )}
        {technologies && (
          <div className="ml-auto flex flex-wrap justify-end gap-1">
            {technologies.map((technology) => (
              <Technology technology={technology} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
