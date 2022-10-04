import { AnchorHTMLAttributes } from "react"

export default function Button({ children, href, target, onClick }: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			onClick={onClick}
			href={href}
			target={target}
			className="cursor-pointer flex max-h-min max-w-min border-[1px] border-solid dark:border-zinc-800 border-zinc-300 px-4 py-1 rounded shadow-lg dark:hover:bg-zinc-800 hover:bg-zinc-200 hover:-translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
		>{children}</a>
	)
}