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
					{ detail && <p className="text-sm dark:text-zinc-600 text-zinc-400">{detail}</p> }
				</div>
				<p>{description}</p>
			</div>
			<div className="flex items-end gap-2">
				{ url ? <Button target={"_blank"} href={url}>Link</Button> : null }
				{ repositoryUrl ? <Button target={"_blank"} href={repositoryUrl}>Repositório</Button> : null }
				{ technologies ? <CardTechnologies className="ml-auto" technologies={technologies} /> : null }
			</div>
		</div>
	)
}