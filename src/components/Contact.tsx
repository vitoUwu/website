import { ReactNode } from "react";
import Title from "./Title";
import CustomIcon from "./icons/CustomIcon";

interface ContactProps {
  url: string;
  children: ReactNode;
}

function Contact({ url, children }: ContactProps) {
  return (
    <a
      target="_blank"
      href={url}
      className="flex gap-1 hover:underline underline-offset-2 hover:text-zinc-800 dark:hover:text-zinc-300 hover:fill-zinc-800 dark:hover:fill-zinc-300 transition-colors"
    >
      {children}
    </a>
  );
}

export function Contacts() {
  return (
    <section id="contato" className="text-center">
      <Title>Contato</Title>
      <ul className="flex gap-3">
        <li>
          <Contact url="mailto:victorhugomeurerdelgrandi@gmail.com">
            <CustomIcon name="email" />
            <p>Email</p>
          </Contact>
        </li>
        <li>
          <Contact url="https://github.com/vitoUwu">
            <CustomIcon name="github" />
            <p>GitHub</p>
          </Contact>
        </li>
        <li>
          <Contact url="https://twitter.com/vitoodev">
            <CustomIcon name="twitter" />
            <p>Twitter</p>
          </Contact>
        </li>
        <li>
          <Contact url="https://www.linkedin.com/in/vitoo/">
            <CustomIcon name="linkedin" />
            <p>LinkedIn</p>
          </Contact>
        </li>
      </ul>
    </section>
  );
}
