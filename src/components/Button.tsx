import { Slot } from "@radix-ui/react-slot";

interface Props {
  children?: React.ReactNode;
  asChild?: boolean;
  onClick?: () => void;
}

export default function Button({ children, asChild, onClick }: Props) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      onClick={onClick}
      className="dark:text-zinc-300 text-zinc-500 cursor-pointer flex max-h-min max-w-min border-[1px] border-solid dark:border-zinc-800 border-zinc-300 px-4 py-1 rounded shadow-lg dark:hover:bg-zinc-800 hover:bg-zinc-200 hover:-translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
    >
      {children}
    </Component>
  );
}