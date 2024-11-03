export interface Project {
  name: string;
  description: string;
  url?: string;
  repository?: string;
}

export const projects: Project[] = [
  {
    name: "Invest Tracker",
    description: "projects.invest-tracker.description",
    url: "https://invest.vitoo.dev",
    repository: "https://github.com/vitoUwu/invest-tracker",
  },
  {
    name: "In.orbit",
    description: "projects.in-orbit.description",
    url: "http://nlw-pocket-web-production.up.railway.app/",
    repository: "https://github.com/vitoUwu/nlw-pocket-web",
  },
];
