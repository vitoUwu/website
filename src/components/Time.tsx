"use client";

import { useEffect, useState } from "react";

export function Time() {
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    const timeout = setInterval(
      () => setTimestamp((state) => state + 1000),
      1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="flex items-center gap-3 text-gray-400 font-mono text-sm animate-fade-in-200"
    >
      {new Date(timestamp).toLocaleDateString("pt-BR", {
        timeZone: "America/Cuiaba",
      })}
      <div className="inline-block h-1 w-1 bg-gray-400 rounded-full" />
      {new Date(timestamp).toLocaleTimeString("pt-BR", {
        timeZone: "America/Cuiaba",
      })}
      <div className="inline-block h-1 w-1 bg-gray-400 rounded-full" />
      Brazil
    </div>
  );
}
