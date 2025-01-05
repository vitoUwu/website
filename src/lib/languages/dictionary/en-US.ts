import { Dictionary } from ".";

export default {
  header: {
    im: "I'm",
    role: "a full stack developer at",
  },
  about: {
    title: "About",
    description: [
      "Currently, I'm trying to build and transform some ideas into art pieces. At Deco.cx, I'm developing the future of technology in Brazil.",
      "Before Deco.cx, I worked at Itza Tech, my first professional experience, basically the same stack I work with today, HTMX, Tailwind and TypeScript.",
      "In my personal projects, I like to try new things. I'm using Vue and Nuxt.js on the front-end, and C# and Java on the back-end.",
      "I made several open source contributions to Deco.cx, being recognized as one of the 'leading developers' with 12 consecutive weeks of contributions.",
    ],
  },
  work: {
    title: "Work",
    works: {
      deco: {
        description: [
          "Building the future of digital native experiences at Deco.cx",
          "Working on professional services, mainly in the e-commerce area, I implemented and improved several sites using Deno.js, HTMX and Typescript.",
        ],
      },
      itza: {
        description: [
          "Developed several high-performance e-commerce applications, extremely customizable and with a simple stack.",
        ],
      },
    },
  },
  projects: {
    title: "Projects",
    view: "View",
    repository: "Repository",
    projects: {
      decobot: {
        description: [
          "A Discord bot that creates pull request notifications from the Github of deco.cx, automatically defines a reviewer and creates review summaries at the end of the day.",
        ],
      },
      invest: {
        description: [
          "An application to track your investments. Currently this project is closed to the public but it is open source.",
        ],
      },
      inorbit: {
        description: [
          "An application to track your skills and weekly goals. Made in a mini bootcamp called NLW from Rocketseat.",
        ],
      },
    },
  },
} satisfies Dictionary;
