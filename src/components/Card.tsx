import Button from "./Button"

interface CardProps {
	title: string,
	detail?: string,
	description: string,
	url?: string,
	repositoryUrl?: string,
	className?: string
}

export default function Card({ title, detail, description, url, repositoryUrl, className }: CardProps) {
	return (
		<div className={`transition-colors dark:bg-zinc-900 bg-zinc-100 w-full shadow-xl border-[1px] dark:border-zinc-800 border-zinc-300 flex flex-col justify-between rounded py-4 px-6 ${className}`}>
			<div>
				<div className="flex gap-2 items-end">
					<h1 className="text-xl font-bold">{title}</h1>
					{ !!detail && <p className="text-sm dark:text-zinc-600 text-zinc-400">{detail}</p> }
				</div>
				<p>{description}</p>
			</div>
			{
				url || repositoryUrl ?
				<div className="mt-4 flex gap-2">
					{ url ? <Button target={"_blank"} href={url}>Link</Button> : null }
					{ repositoryUrl ? <Button target={"_blank"} href={repositoryUrl}>Repositório</Button> : null }
				</div> : null
			}
		</div>
	)
}