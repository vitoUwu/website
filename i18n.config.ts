export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en: {
      head: {
        lang: "en",
        description:
          "Currently trying to build and transform some ideas into pieces of art. At Carcará I develop softwares with high-performance and quality in a very short time.",
      },
      header: {
        0: "I'm",
        1: "full-stack developer at",
      },
      about: {
        title: "About",
        0: "Currently trying to build and transform some ideas into pieces of art. At Carcará I develop softwares with high-performance and quality in a very short time.",
        1: "Before Carcará I worked at Itza Tech, which was my first professional experience, basically it was the same stack I work with currently, HTMX, Tailwind and TypeScript.",
        2: "In personal projects I like to try new things. I'm currently using Vue and Nuxt.js on the front-end, and Golang and C# on the back-end.",
        3: 'I made several open source contributions to deco.cx, I was recognized as one of the "leading developers" reaching 12 weeks of contributions.',
      },
      works: {
        title: "Works",
        now: "now",
        months: "months",
        years: "year(s)",
        carcara: {
          description:
            "We are an implementation accelerator, we build applications with high performance and quality in a very short time.",
        },
        itza: {
          description:
            "We developed several high-performance e-commerce, extremely customizable and with a simple stack.",
        },
      },
      projects: {
        title: "Projects",
        "invest-tracker": {
          description:
            "An app to track your investments. Currently this project is closed to the public but it's open source.",
        },
        "in-orbit": {
          description:
            "An app about tracking your habits and weekly goals. Made in a mini bootcamp called NLW from Rocketseat.",
        },
        view: "View",
        repository: "Repository",
      },
      toggleLanguage: "versão em português",
    },
    pt: {
      head: {
        lang: "pt-BR",
        description:
          "Atualmente estou tentando construir e transformar algumas ideias em peças de arte. Na Carcará eu desenvolvo softwares com alto desempenho e qualidade em um curto tempo.",
      },
      header: {
        0: "sou",
        1: "desenvolvedor Full Stack na",
      },
      about: {
        title: "Sobre",
        0: "Atualmente estou tentando construir e transformar algumas ideias em peças de arte. Na Carcará eu desenvolvo softwares com alto desempenho e qualidade em um curto tempo.",
        1: "Antes de Carcará trabalhei em Itza Tech, que foi minha primeira experiência profissional, basicamente era a mesma stack em que trabalho atualmente, HTMX, Tailwind e TypeScript.",
        2: "Em meus projetos pessoais gosto de tentar novas coisas. Atualmente estou usando Vue e Nuxt.js no front-end, e Golang e C# no back-end.",
        3: 'Fiz várias contribuições open source para a deco.cx, fui reconhecido como um dos "leading developers" chegando a 12 semanas seguidas de contribuições.',
      },
      works: {
        title: "Trabalhos",
        now: "atualmente",
        months: "meses",
        years: "ano(s)",
        carcara: {
          description:
            "Somos uma aceleradora de implementação, construímos aplicações com alto desempenho e qualidade em um curto tempo.",
        },
        itza: {
          description:
            "Desenvolvi várias aplicações de e-commerce de alto desempenho, extremamente customizáveis e com uma stack simples.",
        },
      },
      projects: {
        title: "Projetos",
        "invest-tracker": {
          description:
            "Um aplicativo para rastrear suas investimentos. Atualmente este projeto está fechado para o público mas é open source.",
        },
        "in-orbit": {
          description:
            "Um aplicativo sobre rastrear suas habilidades e metas semanais. Feito em um mini bootcamp chamado NLW da Rocketseat.",
        },
        view: "Ver",
        repository: "Repositório",
      },
      toggleLanguage: "english version",
    },
  },
}));
