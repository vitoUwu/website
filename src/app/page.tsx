"use client";

import { Time } from "@/components/Time";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <div className="max-w-screen-md w-[80%] sm:w-[70%] space-y-3">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-semibold leading-none">
            Oi, sou Victor
          </h1>
          <p className="text-sm mt-2 text-muted-foreground">
            Estudante de Engenharia de Software com amor pela área de
            desenvolvimento web e mobile. Tenho gosto por Front-End e interesse
            em Back-Ends e APIs. Gerencio comunidades do Discord e desenvolvo
            ferramentas para facilitar a administração dessas comunidades.
          </p>
        </div>
        <Time />
        <Card className="p-3 flex flex-wrap items-center gap-6 justify-center">
          <Contact href="https://github.com/vitoUwu">Github</Contact>
          <Contact href="https://linkedin.com/in/vitoo">LinkedIn</Contact>
          <Contact href="mailto:victorhugomeurerdelgrandi@gmail.com">
            Email
          </Contact>
        </Card>
      </div>
    </main>
  );
}

type ContactProps = {
  href: string;
  children: ReactNode;
};

function Contact({ href, children }: ContactProps) {
  return (
    <Link
      href={href}
      className="flex gap-2 items-center text-muted-foreground text-sm w-min"
    >
      {children}
    </Link>
  );
}
