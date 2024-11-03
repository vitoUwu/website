export interface Work {
  name: string;
  description: string;
  start: Date;
  end?: Date;
  role: string;
}

export default [
  {
    name: "Carcará",
    description: "works.carcara.description",
    start: new Date("05/1/2024"),
    role: "fullstack",
  },
  {
    name: "ITZA Tech",
    description: "works.itza.description",
    start: new Date("08/1/2023"),
    end: new Date("04/1/2024"),
    role: "fullstack",
  },
] satisfies Work[];
