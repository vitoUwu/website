"use client";

import { useEffect, useState } from "react";

export function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());

    const timeout = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="flex items-center gap-3 text-gray-400 font-mono text-sm animate-fade-in-200"
    >
      {date.toLocaleDateString("pt-BR", {
        timeZone: "America/Cuiaba",
      })}
      <div className="inline-block h-1 w-1 bg-gray-400 rounded-full" />
      {date.toLocaleTimeString("pt-BR", {
        timeZone: "America/Cuiaba",
      })}
      <div className="inline-block h-1 w-1 bg-gray-400 rounded-full" />
      Brazil
    </div>
  );
}
