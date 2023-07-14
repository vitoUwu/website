import { useOnScreen } from "@/hooks/useOnScreen";
import projects from "@/lib/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnchorHTMLAttributes, useRef } from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  project: (typeof projects)[number];
};

export function ProjectCard({ project }: Props) {
  const ref = useRef<null | HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <Card
      ref={ref}
      className={cn(
        "flex flex-col h-full",
        isOnScreen ? "animate-fade-in" : ""
      )}
    >
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardDescription>{project.description}</CardDescription>
        {project.badges ? (
          <div className="flex gap-3 flex-wrap">
            {project.badges.map((badge) => (
              <Badge key={badge + project.title}>{badge}</Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="flex gap-3 mt-auto">
        {project.url ? (
          <ProjectLink href={project.url}>Visitar</ProjectLink>
        ) : null}
        {project.repository_url ? (
          <ProjectLink href={project.repository_url}>Repositório</ProjectLink>
        ) : null}
      </CardFooter>
    </Card>
  );
}

type ProjectLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
};

function ProjectLink({ children, href }: ProjectLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:bg-muted transition-colors flex rounded-md border border-border bg-background py-3 px-4 fill-card-foreground text-card-foreground"
    >
      {children}
      <ArrowUpRight />
    </Link>
  );
}
