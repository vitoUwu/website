import { ReactNode } from "react"

interface ItemProps {
  children: ReactNode
}

export function Item({ children }: ItemProps) {
  return (
    <li className="flex gap-1 py-1 px-2">
      {children}
    </li>
  )
}