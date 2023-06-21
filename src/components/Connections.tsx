import { ReactNode } from "react";
import Title from "./Title";
import CustomIcon from "./icons/CustomIcon";

interface ConnectionProps {
  url: string;
  children: ReactNode;
}

function Connection({ url, children }: ConnectionProps) {
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

export function Connections() {
  return (
    <section id="conexões" className="text-center">
      <Title>Conexões</Title>
      <ul className="flex flex-wrap justify-center gap-3">
        <li>
          <Connection url="https://anilist.co/user/viitoo">
            <CustomIcon name="anilist" />
            <p>Anilist</p>
          </Connection>
        </li>
        <li>
          <Connection url="https://open.spotify.com/user/victorhugomeurer">
            <CustomIcon name="spotify" />
            <p>Spotify</p>
          </Connection>
        </li>
        <li>
          <Connection url="https://www.last.fm/pt/user/vitoUwu">
            <CustomIcon name="music" />
            <p>Last FM</p>
          </Connection>
        </li>
        <li>
          <Connection url="https://discord.com/users/504717946124369937">
            <CustomIcon name="discord" />
            <p>Discord</p>
          </Connection>
        </li>
      </ul>
    </section>
  );
}
