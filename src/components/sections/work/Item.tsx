import dynamic from "next/dynamic";

export interface Work {
  name: string;
  description: string[];
  start: Date;
  end?: Date;
  role: string;
}

const DynamicRelativeDate = dynamic(() => import("@/components/RelativeDate"), {
  loading: () => <span>calculando...</span>,
});

export default function Item({ work }: { work: Work }) {
  const start = work.start.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
  });
  const end = work.end
    ? work.end.toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "long",
      })
    : "atualmente";

  return (
    <li>
      <div className="flex justify-between items-center">
        <h3 className="text-neutral-300 text-base font-newsreader">
          {work.name}
        </h3>

        <p className="text-xs text-neutral-500">
          {start} - {end} (
          <DynamicRelativeDate start={work.start} end={work.end} />)
        </p>
      </div>
      <p className="flex flex-col gap-[1ch]">
        {work.description.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </p>
    </li>
  );
}
