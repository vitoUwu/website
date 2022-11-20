import { ReactNode } from "react";

interface CenterListProps {
  children: ReactNode
}

export function CenterList({ children }: CenterListProps) {
  return (
    <ul className="flex flex-wrap justify-center">
      { children }
    </ul>
  )
}