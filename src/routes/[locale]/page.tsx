import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locale/page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/locale/page"!</div>
}
