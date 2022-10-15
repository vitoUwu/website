import Button from "./Button"
import CardTechnologies from "./CardTechnologies"

interface CardProps {
	title: string,
	detail?: string,
	description: string,
	url?: string,
	repositoryUrl?: string,
	className?: string,
	technologies?: string[]
}

export default function Card({ title, detail, description, url, repositoryUrl, className, technologies }: CardProps) {
	return (
		<div className={`transition-colors dark:bg-zinc-900 bg-zinc-100 w-full shadow-xl border-[1px] dark:border-zinc-800 border-zinc-300 flex flex-col justify-between rounded py-4 px-6 ${className}`}>
			<div>
				<div className="flex gap-2 items-end">
					<h1 className="text-xl font-bold">{title}</h1>
					{ detail && <p className="text-sm dark:text-zinc-500 text-zinc-500">{detail}</p> }
				</div>
				<p>{description}</p>
			</div>
			<div className="flex items-end gap-2">
				{ url && 
					<Button asChild>
						<a target={"_blank"} href={url}>
							Link
						</a>
					</Button>
				}
				{ repositoryUrl &&
					<Button asChild>
						<a target={"_blank"} href={repositoryUrl}>
							Repositório
						</a>
					</Button>
				}
				{ technologies &&
					<CardTechnologies className="ml-auto" technologies={technologies} />
				}
			</div>
		</div>
	)
}