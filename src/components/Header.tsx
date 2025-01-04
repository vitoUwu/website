function HighlightedText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-newsreader text-zinc-200 text-4xl">{children}</span>
  );
}

export default function Header() {
  return (
    <header>
      <h1 className="text-3xl text-neutral-500">
        sou <HighlightedText>Victor</HighlightedText>, desenvolvedor full stack
        na <HighlightedText>Deco.cx</HighlightedText>
      </h1>
    </header>
  );
}
