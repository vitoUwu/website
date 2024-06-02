export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      head: {
        lang: "en",
      },
      pages: {
        home: {
          role: "Full Stack Developer",
          description:
            "I'm a Software Engineering student, I started programming at 16 and since then I'm passionate about programming. With my skills, focus and discipline, I always seek to overcome any challenge.<br/><br/>I'm always acquiring knowledge and improving my skills to achieve my goals, as well as always being updated on market trends.<br/><br/>Today I have a great knowledge in HTML, CSS, Javascript, Node.js, Typescript, React.js, Next.js, Tailwind, MongoDB, MySQL and PostgreSQL. I'm also looking to learn about Vue.js, Nuxt.js and C#. I've had some experiences with Python and Java, but I've never really delved into them.",
        },
        projects: {
          head: {
            title: "Projects",
            description:
              "Here you can see some of my repositories and the languages I use the most.",
          },
          titles: {
            languages: "Most used languages",
            repositories: "My repositories",
          },
        },
        works: {
          title: "Works",
        },
        404: {
          head: {
            title: "Page not found",
            description:
              "The page you are looking for does not exist or has been moved.",
          },
        },
      },
      roles: {
        fullstack: "Full Stack Developer",
        teacher: "Instructor",
      },
      common: {
        projects: "Projects",
        works: "Works",
        brazilian: "Brazilian",
        recently: "Recently",
        back: "back",
        listeningTo: "Listening to",
        by: "by",
      },
      locales: {
        en: "English",
        pt: "Português",
      },
      works: {
        carcara: {
          description:
            "We are partners of Capivaras, Deco.cx specialists, we implement e-commerce and APIs with amazing efficiency. Our focus is to deliver high quality and performance solutions, using communication frameworks to improve our development speed, Deco as a headless platform, Fresh.js, Tailwind, Typescript, Deno and HTMX as the main stack. We have already implemented projects such as Farm Rio, Reserva, Granado, Als, among others, reaching up to 90 performance points on Page Speed Insights.",
        },
        itza: {
          description:
            "We developed a headless e-commerce using deco.cx, Fresh, Tailwind, Typescript and Deno. Our focus is to build and implement solutions in the smoothest and most performant way possible, so that the user can navigate smoothly and without crashes or slowness. I built, optimized and refactored sites and implementations such as Zorba, PG Adesivos, Velocita, True Source among others. I improved loading times by reducing around 2 to 5 seconds of loading, reduced bundle sizes, delivering less Javascript to the browser. I also made open source contributions to deco.cx.",
        },
        codigokid: {
          description:
            "Instruct and assist students aged 6 to 12 in online platform classes. Create experimental classes so that new students can become familiar with the content. Develop robotics and games projects for events within the school.",
        },
      },
    },
    pt: {
      head: {
        lang: "pt-BR",
      },
      pages: {
        home: {
          role: "Desenvolvedor Full Stack",
          description:
            "Sou estudante de Engenharia de Software, comecei a programar com 16 anos e desde então sou apaixonado pela área de programação. Com as minhas habilidades, foco e disciplina, busco sempre vencer qualquer desafio.<br/><br/>Estou sempre adquirindo conhecimento e aprimorando as minhas habilidades para alcançar meus objetivos, além de sempre estar atualizado sobre as tendências do mercado.<br/><br/>Hoje tenho um grande conhecimento em HTML, CSS, Javascript, Node.js, Typescript, React.js, Next.js, Tailwind, MongoDB, MySQL e PostgreSQL. Também estou procurando aprender sobre Vue.js, Nuxt.js e C#. Já tive algumas experiências com Python e Java, porém nunca me aprofundei de fato.",
        },
        projects: {
          head: {
            title: "Projetos",
            description:
              "Aqui você pode ver alguns dos meus repositórios e as linguagens que mais utilizo.",
          },
          titles: {
            languages: "Linguagens mais utilizadas",
            repositories: "Meus repositórios",
          },
        },
        works: {
          title: "Experiência",
        },
        404: {
          head: {
            title: "Página não encontrada",
            description:
              "A página que você está procurando não existe ou foi movida.",
          },
        },
      },
      roles: {
        fullstack: "Desenvolvedor Full Stack",
        teacher: "Instrutor",
      },
      common: {
        projects: "Projetos",
        works: "Trabalhos",
        brazilian: "Brasileiro",
        recently: "Recentemente",
        back: "voltar",
        listeningTo: "Ouvindo",
        by: "de",
      },
      locales: {
        en: "English",
        pt: "Português",
      },
      works: {
        carcara: {
          description:
            "Somos parceiros das Capivaras, especialistas em Deco.cx, implementamos e-commerce e APIs com uma eficiência surpreendente. Nosso foco é entregar soluções de alta qualidade e performance, utilizando frameworks de comunicação para melhorarmos nossa velocidade de desenvolvimento, Deco como plataforma headless, Fresh.js, Tailwind, Typescript, Deno e HTMX como stack principal. Já implementamos projetos como Farm Rio, Reserva, Granado, Als, entre outros, alcançando até 90 pontos de performance no Page Speed Insights",
        },
        itza: {
          description:
            "Desenvolvemos e-commerce headless utilizando a deco.cx, Fresh, Tailwind, Typescript e Deno. Nosso foco é construir e implementar soluções da maneira mais fluida e performática possível, para que o usuário possa navegar de forma suave e sem travamentos ou lentidões. Construi, otimizei e refatorei sites e implementações como Zorba, PG Adesivos, Velocita, True Source entre outras. Melhorei tempos de carregamento reduzindo em torno de 2 a 5 segundos de carregamento, reduzi tamanho de bundles, entregando menos Javascript para o browser. Fiz também contribuições open source para a deco.cx.",
        },
        codigokid: {
          description:
            "Instruir e auxiliar alunos de 6 a 12 anos nas aulas na plataforma online. Criar aulas experimentais para que novos alunos possam se familiarizar com o conteúdo. Desenvolver projetos de robótica e de jogos para eventos dentro da escola.",
        },
      },
    },
  },
}));
