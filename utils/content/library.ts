export interface Book {
  title: string;
  url: string;
  cover: string;
  author: string;
}

export const books: Book[] = [
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
