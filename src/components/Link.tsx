import { ReactNode } from "react"

interface LinkProps {
  children: ReactNode,
  href: string
}

export function Link({ children, href }: LinkProps) {
  return (
    <a
      href={href}
      target={"_blank"}
      className="flex gap-1"
    >
      { children }
    </a>
  )
}