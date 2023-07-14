import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function Title({ className, children, ...props }: Props) {
  return (
    <h1
      {...props}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
