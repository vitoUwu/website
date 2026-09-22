export const SUPPORTED_LOCALES = ["en-US", "pt-BR"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en-US";
export const LOCALE_PATHS = {
  "en-US": "en",
  "pt-BR": "pt",
} as const satisfies Record<Locale, string>;

export type LocalePath = (typeof LOCALE_PATHS)[Locale];

export function getLocalePath(locale: Locale): LocalePath {
  return LOCALE_PATHS[locale];
}

export function getLocaleFromPath(path: string | undefined): Locale | null {
  const entry = Object.entries(LOCALE_PATHS).find(
    ([, localePath]) => localePath === path,
  );

  return (entry?.[0] as Locale | undefined) ?? null;
}

const shared = {
  projects: [
    {
      name: "DECO.CX",
      period: "2024—NOW",
      stack: "DENO · HTMX · TYPESCRIPT",
      links: [{ label: "DECO.CX", href: "https://deco.cx" }],
    },
    {
      name: "AL’S SPORTING GOODS",
      period: "2024",
      stack: "COMMERCE · PERFORMANCE",
      links: [{ label: "AL’S SPORTING GOODS", href: "https://www.als.com" }],
    },
    {
      name: "FARM RIO / GRANADO / FILA",
      period: "2023—24",
      stack: "E-COMMERCE · FRONT-END",
      links: [
        { label: "FARM RIO", href: "https://www.farmrio.com.br" },
        { label: "GRANADO", href: "https://www.granado.com.br" },
        { label: "FILA", href: "https://www.fila.com.br" },
      ],
    },
  ],
  experience: [
    {
      period: "2024—NOW",
      company: "DECO.CX",
    },
    {
      period: "2023—2024",
      company: "ITZA TECH",
    },
  ],
  socials: [
    { label: "GITHUB", href: "https://github.com/vitouwu" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/vitoo/" },
    { label: "X / TWITTER", href: "https://x.com/vitoodev" },
  ],
} as const;

export const translations = {
  "en-US": {
    meta: {
      title: "vitoo — full-stack developer",
      description:
        "Victor is a full-stack developer building fast, thoughtful commerce and product experiences.",
    },
    skip: "Skip to content",
    navigation: "Primary navigation",
    openMenu: "Open navigation menu",
    nav: {
      work: "work",
      about: "about",
      now: "now",
      contact: "contact",
      menu: "MENU",
    },
    hero: {
      eyebrow: "FULL-STACK DEVELOPER / BRAZIL",
      headline: "digital things\nthat move.",
      intro:
        "I’m Victor — a developer turning complex commerce and product ideas into fast, thoughtful experiences.",
      available: "AVAILABLE FOR SELECT COLLABORATIONS",
      availableShort: "AVAILABLE FOR COLLABORATIONS",
      current: "CURRENTLY @ DECO.CX",
      location: "SÃO PAULO",
    },
    work: {
      index: "01 / SELECTED WORK",
      note: "A few commerce and product systems built for real scale, real users and real constraints.",
      noteShort:
        "Commerce and product systems built for real scale, users and constraints.",
      title: "selected work",
      mobileTitle: "selected\nwork",
      projectLabel: "Selected projects",
      descriptions: [
        "Native commerce infrastructure",
        "Continuous evolution for a major US retailer",
        "Fast storefronts for iconic Brazilian brands",
      ],
    },
    about: {
      index: "02 / ABOUT",
      title: "maker.\nlearner.\npartner.",
      lead: "I like making the difficult feel inevitable.",
      body: "From e-commerce platforms to small experiments, I work across the stack with a bias for clarity, speed and systems that are easy to evolve. I’m currently helping shape native digital experiences at deco.cx.",
      bodyShort:
        "From e-commerce platforms to small experiments, I work across the stack with a bias for clarity, speed and systems that are easy to evolve.",
      principles: [
        "SIMPLE OVER CLEVER",
        "SHIP, LEARN, REFINE",
        "PERFORMANCE IS UX",
      ],
      experience: "EXPERIENCE",
      roles: ["FULL-STACK DEVELOPER", "SOFTWARE DEVELOPER"],
    },
    now: {
      index: "03 / NOW — LIVE",
      updated: "UPDATED",
      title: "away from the keyboard,\nstill collecting signals.",
      building: {
        label: "BUILDING",
        title: "SMALL TOOLS",
        body: "Exploring useful interfaces with Vue, Nuxt, C# and Java.",
        link: "EXPLORE",
      },
      reading: {
        label: "READING",
        title: "REINVENTING ORGANIZATIONS",
        body: "Frederic Laloux — notes on work, systems and autonomy.",
        link: "EXPLORE",
      },
    },
    footer: {
      index: "04 / FIND ME ONLINE",
      title: "elsewhere,\nonline.",
      navigation: "Social links",
      copyright: "© 2026 VICTOR / VITOO.DEV",
    },
    newTab: "opens in a new tab",
    shared,
  },
  "pt-BR": {
    meta: {
      title: "vitoo — desenvolvedor full-stack",
      description:
        "Victor é um desenvolvedor full-stack que cria experiências rápidas e cuidadosas para comércio e produtos digitais.",
    },
    skip: "Pular para o conteúdo",
    navigation: "Navegação principal",
    openMenu: "Abrir menu de navegação",
    nav: {
      work: "trabalhos",
      about: "sobre",
      now: "agora",
      contact: "contato",
      menu: "MENU",
    },
    hero: {
      eyebrow: "DESENVOLVEDOR FULL-STACK / BRASIL",
      headline: "coisas digitais\nque se movem.",
      intro:
        "Sou Victor — um desenvolvedor que transforma ideias complexas de comércio e produto em experiências rápidas e cuidadosas.",
      available: "DISPONÍVEL PARA COLABORAÇÕES SELECIONADAS",
      availableShort: "DISPONÍVEL PARA COLABORAÇÕES",
      current: "ATUALMENTE NA DECO.CX",
      location: "SÃO PAULO",
    },
    work: {
      index: "01 / TRABALHOS SELECIONADOS",
      note: "Alguns sistemas de comércio e produto feitos para escala, pessoas e restrições reais.",
      noteShort:
        "Sistemas de comércio e produto feitos para escala, pessoas e restrições reais.",
      title: "trabalhos selecionados",
      mobileTitle: "trabalhos\nselecionados",
      projectLabel: "Projetos selecionados",
      descriptions: [
        "Infraestrutura para comércio digital nativo",
        "Evolução contínua de uma grande varejista dos EUA",
        "Lojas rápidas para marcas brasileiras icônicas",
      ],
    },
    about: {
      index: "02 / SOBRE",
      title: "criador.\naprendiz.\nparceiro.",
      lead: "Gosto de fazer o difícil parecer inevitável.",
      body: "De plataformas de e-commerce a pequenos experimentos, trabalho em toda a stack com foco em clareza, velocidade e sistemas fáceis de evoluir. Hoje ajudo a criar experiências digitais nativas na deco.cx.",
      bodyShort:
        "De plataformas de e-commerce a pequenos experimentos, trabalho em toda a stack com foco em clareza, velocidade e sistemas fáceis de evoluir.",
      principles: [
        "SIMPLES, NÃO ENGENHOSO",
        "ENTREGAR, APRENDER, REFINAR",
        "PERFORMANCE É EXPERIÊNCIA",
      ],
      experience: "EXPERIÊNCIA",
      roles: ["DESENVOLVEDOR FULL-STACK", "DESENVOLVEDOR DE SOFTWARE"],
    },
    now: {
      index: "03 / AGORA — AO VIVO",
      updated: "ATUALIZADO",
      title: "longe do teclado,\nainda captando sinais.",
      building: {
        label: "CRIANDO",
        title: "PEQUENAS FERRAMENTAS",
        body: "Explorando interfaces úteis com Vue, Nuxt, C# e Java.",
        link: "EXPLORAR",
      },
      reading: {
        label: "LENDO",
        title: "REINVENTANDO AS ORGANIZAÇÕES",
        body: "Frederic Laloux — notas sobre trabalho, sistemas e autonomia.",
        link: "EXPLORAR",
      },
    },
    footer: {
      index: "04 / ENCONTRE-ME ONLINE",
      title: "em outros\nlugares.",
      navigation: "Links sociais",
      copyright: "© 2026 VICTOR / VITOO.DEV",
    },
    newTab: "abre em uma nova aba",
    shared: {
      ...shared,
      projects: shared.projects.map((project) =>
        project.period === "2024—NOW"
          ? { ...project, period: "2024—AGORA" }
          : project,
      ),
      experience: shared.experience.map((item) =>
        item.period === "2024—NOW" ? { ...item, period: "2024—AGORA" } : item,
      ),
    },
  },
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

export type Translation = ReturnType<typeof getTranslation>;
