import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <h1 className="text-2xl my-3 text-zinc-800 dark:text-zinc-300 uppercase font-bold mt-5">
      {children}
    </h1>
  );
}
