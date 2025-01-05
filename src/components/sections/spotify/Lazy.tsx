"use client";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./Component"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default function LazyComponent() {
  return <DynamicComponent />;
}
