import { AnchorHTMLAttributes } from "react"

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string
}

export default function Button({ label, href, target }: ButtonProps) {
	return (
		<a href={href} target={target} className="border-[1px] border-solid border-zinc-300 px-4 py-1 rounded shadow-lg hover:bg-zinc-200 hover:-translate-y-1 hover:shadow-xl transition ease-in-out duration-300">{label}</a>
	)
}