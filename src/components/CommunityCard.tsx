"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import communities from "@/lib/communities";
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
  community: (typeof communities)[number];
};

export function CommunityCard({ community }: Props) {
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
        <CardTitle>{community.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardDescription>{community.description}</CardDescription>
        <Badge>{community.role}</Badge>
      </CardContent>
      <CardFooter className="flex gap-3 mt-auto">
        {community.invite ? (
          <ProjectLink href={community.invite}>Entrar</ProjectLink>
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
