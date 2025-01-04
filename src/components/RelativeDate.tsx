"use client";

// It shouldn't always be a client side component, but it's a simple component and it's not a big deal.
export default function RelativeDate({
  start,
  end = new Date(),
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  start: Date;
  end?: Date;
}) {
  const diff = Math.floor((end.getTime() - start.getTime()) / 86400000);
  const durationUnit = diff > 365 ? "anos" : diff > 30 ? "meses" : "dias";
  const durationQuantity = Math.floor(
    durationUnit === "anos"
      ? diff / 365
      : durationUnit === "meses"
      ? diff / 30
      : diff
  );

  return (
    <span {...props}>
      {durationQuantity} {durationUnit}
    </span>
  );
}
