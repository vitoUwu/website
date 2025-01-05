interface Props {
  title: string;
  id: string;
  children: React.ReactNode;
}

export default function Section({ title, id, children }: Props) {
  return (
    <section
      id={id}
      className="text-neutral-400 space-y-3 scroll-mt-10 border-b border-neutral-800 py-10"
    >
      <h2 className="text-neutral-500 font-medium font-newsreader">{title}</h2>
      {children}
    </section>
  );
}
