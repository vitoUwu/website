import {
  mdiAlert,
  mdiEmail,
  mdiGithub,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiLinkedin,
  mdiMusic,
  mdiNodejs,
  mdiReact,
  mdiSpotify,
  mdiTailwind,
  mdiTwitter,
  mdiVuejs,
  mdiYoutube,
} from "@mdi/js";

import { Icon } from "@mdi/react";
import { Anilist } from "./Anilist";
import { Discord } from "./Discord";
import { Flutter } from "./Flutter";
import { Golang } from "./Golang";
import { MongoDB } from "./MongoDB";
import { NextJs } from "./Nextjs";
import { Prisma } from "./Prisma";
import { Svelte } from "./Svelte";

export type IconNames =
  | "youtube"
  | "spotify"
  | "anilist"
  | "nextjs"
  | "linkedin"
  | "nodejs"
  | "python"
  | "javascript"
  | "typescript"
  | "react"
  | "vuejs"
  | "discord"
  | "prisma"
  | "mongodb"
  | "tailwind"
  | "email"
  | "github"
  | "twitter"
  | "music"
  | "flutter"
  | "golang"
  | "java"
  | "svelte";

interface Props {
  name: IconNames;
}

export default function CustomIcon({ name }: Props) {
  switch (name) {
    case "email":
      return <Icon path={mdiEmail} size={1} />;
    case "github":
      return <Icon path={mdiGithub} size={1} />;
    case "twitter":
      return <Icon path={mdiTwitter} size={1} />;
    case "tailwind":
      return <Icon path={mdiTailwind} size={1} />;
    case "nodejs":
      return <Icon path={mdiNodejs} size={1} />;
    case "python":
      return <Icon path={mdiLanguagePython} size={1} />;
    case "javascript":
      return <Icon path={mdiLanguageJavascript} size={1} />;
    case "typescript":
      return <Icon path={mdiLanguageTypescript} size={1} />;
    case "react":
      return <Icon path={mdiReact} size={1} />;
    case "vuejs":
      return <Icon path={mdiVuejs} size={1} />;
    case "linkedin":
      return <Icon path={mdiLinkedin} size={1} />;
    case "discord":
      return <Discord />;
    case "prisma":
      return <Prisma />;
    case "mongodb":
      return <MongoDB />;
    case "nextjs":
      return <NextJs />;
    case "anilist":
      return <Anilist />;
    case "spotify":
      return <Icon path={mdiSpotify} size={1} />;
    case "youtube":
      return <Icon path={mdiYoutube} size={1} />;
    case "music":
      return <Icon path={mdiMusic} size={1} />;
    case "flutter":
      return <Flutter />;
    case "golang":
      return <Golang />;
    case "java":
      return <Icon path={mdiLanguageJava} size={1} />;
    case "svelte":
      return <Svelte />;
    default:
      return <Icon path={mdiAlert} />;
  }
}
