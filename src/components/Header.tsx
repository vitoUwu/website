import { Language } from "@/lib/languages";
import { getDictionary } from "@/lib/languages/dictionary";

function HighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-newsreader text-zinc-200 text-4xl">{children}</span>
  );
}

export default async function Header({ locale }: { locale: Language }) {
  const { header } = getDictionary(locale);
  return (
    <header>
      <h1 className="text-3xl text-neutral-500">
        {header.im} <HighlightedText>Victor</HighlightedText>, {header.role}{" "}
        <HighlightedText>Deco.cx</HighlightedText>
      </h1>
    </header>
  );
}
