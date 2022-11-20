import Button from "./Button"
import CardTechnologies from "./CardTechnologies"
import { motion } from 'framer-motion'
interface CardProps {
	title: string,
	detail?: string,
	description: string,
	url?: string,
	repoUrl?: string,
	className?: string,
	technologies?: string[]
}

export default function Card({ title, detail, description, url, repoUrl, className, technologies }: CardProps) {
	return (
		<div className={`transition-colors dark:bg-zinc-900 bg-zinc-100 w-full shadow-xl border-[1px] dark:border-zinc-800 border-zinc-300 flex flex-col justify-between rounded py-4 px-6 ${className}`}>
			<div>
				<div className="flex gap-2 items-end">
					<h1 className="text-xl font-bold inline-block">
						{title} { detail && <span className="font-normal text-sm dark:text-zinc-500 text-zinc-500">{detail}</span> }
					</h1>
				</div>
				<p>{description}</p>
			</div>
			<div className="flex items-end gap-2 mt-4">
				{ url && 
					<Button asChild>
						<a target={"_blank"} href={url}>
							Link
						</a>
					</Button>
				}
				{ repoUrl &&
					<Button asChild>
						<a target={"_blank"} href={repoUrl}>
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