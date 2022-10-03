import React from "react";

interface TitleProps {
	children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
	return (
		<h1 className="text-2xl text-zinc-800 uppercase font-bold mt-5">
			{children}
		</h1>
	)
}