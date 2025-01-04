import Section from "../Section";
import Item from "./Item";

const works = [
  {
    name: "Deco.cx",
    description:
      "Construindo o futuro da experiência digital nativa de ponta em deco.cx\n\n" +
      "Atuando em serviços profissionais, principalmente na área de e-commerce, implementei e melhorei diversos sites utilizando Deno.js, HTMX e Typescript.",
    start: new Date("05/1/2024"),
    role: "fullstack",
  },
  {
    name: "ITZA Tech",
    description:
      "Desenvolvi várias aplicações de e-commerce de alto desempenho, extremamente customizáveis e com uma stack simples.",
    start: new Date("08/1/2023"),
    end: new Date("04/1/2024"),
    role: "fullstack",
  },
];

export default function Work() {
  return (
    <Section title="work" id="work">
      <ul className="space-y-5">
        {works.map((work) => (
          <Item work={work} key={work.name} />
        ))}
      </ul>
    </Section>
  );
}
