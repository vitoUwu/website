import Image from "next/image";

export interface Book {
  title: string;
  url: string;
  cover: string;
  author: string;
}

export default function Item({ book }: { book: Book }) {
  return (
    <li className="border transition-all border-transparent hover:border-neutral-700 -mt-px -mr-px text-center flex justify-start items-center flex-col">
      <a href={book.url} target="_blank" className="p-2 sm:p-5">
        <Image
          width={128}
          height={156}
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="aspect-[128/156] object-cover"
        />
        <span className="mt-3 line-clamp-3">{book.title}</span>
        <span className="mt-1 line-clamp-3 text-xs text-neutral-500">
          {book.author}
        </span>
      </a>
    </li>
  );
}
