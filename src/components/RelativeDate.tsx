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
  const years = Math.floor(diff / 365);
  const months = Math.floor((diff % 365) / 30);
  const days = diff % 30;
  const text = [
    years > 0 && `${years} ${years > 1 ? "anos" : "ano"}`,
    months > 0 && `${months} ${months > 1 ? "meses" : "mês"}`
  ].filter(Boolean).map((item, index, arr) =>
    arr.length === 2 && index === 0 ?
      item + " e " :
      arr.length > 2 ?
        index === arr.length - 2 ?
          item + " e " :
          index === arr.length - 1 ?
            item :
            item + ", "
        : item).join("");

  return (
    <span {...props}>
      {text}
    </span>
  );
}
