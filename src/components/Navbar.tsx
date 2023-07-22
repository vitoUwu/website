"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  active: boolean;
  href: string;
  children: ReactNode;
};

function LinkItem({ href, children, active }: Props) {
  return (
    <NavigationMenuItem
      data-state={active}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=true]:bg-background data-[state=true]:text-foreground data-[state=true]:shadow-sm"
    >
      <NavigationMenuLink href={href} className="px-3 py-1.5">
        {children}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="z-10 shadow-lg animate-fade-in inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <NavigationMenuList>
        <LinkItem href="/" active={pathname === "/"}>
          Início
        </LinkItem>
        <LinkItem href="/projects" active={pathname === "/projects"}>
          Projetos
        </LinkItem>
        <LinkItem href="/communities" active={pathname === "/communities"}>
          Comunidades
        </LinkItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
