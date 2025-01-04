import Section from "../Section";
import Item, { Book } from "./Item";

const books: Book[] = [
  {
    title: "Reinventing Organizations",
    url: "https://a.co/d/hXyCIJJ",
    cover: "/assets/images/library/reinventing-organizations.png",
    author: "Frederic Laloux",
  },
  {
    title:
      "As 3 leis do desempenho: Reescrevendo o futuro de seu negócio e de sua vida",
    url: "https://a.co/d/1ymIgGf",
    cover: "/assets/images/library/416KIuaEHpS._SY445_SX342_.jpg",
    author: "Steve Zaffron & Dave Logan",
  },
];

export default function Library() {
  return (
    <Section title="library" id="library">
      <ul className="grid grid-cols-3 sm:grid-cols-4">
        {books.map((book) => (
          <Item key={book.title} book={book} />
        ))}
      </ul>
    </Section>
  );
}
