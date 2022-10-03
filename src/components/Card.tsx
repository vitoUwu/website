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
		<div className={`bg-zinc-100 w-full shadow-xl border-[1px] border-zinc-300 flex flex-col justify-between rounded py-4 px-6 ${className}`}>
			<div>
				<div className="flex gap-2 items-end">
					<h1 className="text-xl font-bold">{title}</h1>
					{ !!detail && <p className="text-sm text-zinc-400">{detail}</p> }
				</div>
				<p>{description}</p>
			</div>
			{
				url || repositoryUrl ?
				<div className="mt-4 flex gap-2">
					{ url ? <Button label="Link" target={"_blank"} href={url} /> : null }
					{ repositoryUrl ? <Button label="Repositório" target={"_blank"} href={repositoryUrl} /> : null }
				</div> : null
			}
		</div>
	)
}