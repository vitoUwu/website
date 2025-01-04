import Section from "./Section";

function Line({ children }: { children: React.ReactNode }) {
  return <span className="flex">{children}</span>;
}

export default function About() {
  return (
    <Section title="Sobre" id="about">
      <p className="space-y-[1ch]">
        <Line>
          Atualmente estou tentando construir e transformar algumas ideias em
          peças de arte. Na Deco.cx eu desenvolvo o futuro da tecnologia no
          Brasil.
        </Line>
        <Line>
          Antes de Deco.cx trabalhei em Itza Tech, que foi minha primeira
          experiência profissional, basicamente era a mesma stack em que
          trabalho atualmente, HTMX, Tailwind e TypeScript.
        </Line>
        <Line>
          Em meus projetos pessoais gosto de tentar novas coisas. Atualmente
          estou usando Vue e Nuxt.js no front-end, e C# e Java no back-end.
        </Line>
        <Line>
          Fiz várias contribuições open source para a deco.cx, fui reconhecido
          como um dos "leading developers" chegando a 12 semanas seguidas de
          contribuições.
        </Line>
      </p>
      <ul className="flex justify-center gap-3 items-center pt-10">
        <li>
          <a href="https://github.com/vitouwu" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/vitoo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/vitoodev" target="_blank" rel="noreferrer">
            twitter
          </a>
        </li>
      </ul>
    </Section>
  );
}
