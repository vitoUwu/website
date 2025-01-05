import { useEffect, useRef, useState } from "react";

interface Props {
  start: number;
  end: number;
}

export default function Timeline({ start, end }: Props) {
  const [progress, setProgress] = useState(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!start && !end) return;

    setProgress(start);

    interval.current = setInterval(() => {
      setProgress((old) => old + 1);
    }, 1000);

    return () => {
      if (typeof interval.current === "number") {
        clearInterval(interval.current);
      }
    };
  }, [start, end]);

  return (
    <div className="px-1 pb-1">
      <div className="mt-2 flex justify-between w-full">
        <span className="text-xs text-neutral-500">
          {Math.floor(progress / 60)}:
          {`${Math.floor(progress) % 60}`.padStart(2, "0")}
        </span>
        <span className="text-xs text-neutral-500">
          {Math.floor(end / 60)}:{`${Math.floor(end) % 60}`.padStart(2, "0")}
        </span>
      </div>
      <div className="mt-2 flex w-full h-1 ring-1 ring-offset-neutral-900 ring-offset-2 ring-neutral-500">
        <div
          className="bg-neutral-500 h-full transition-[width] will-change-[width] duration-1000 ease-linear"
          style={{
            width: `${(progress / end) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
