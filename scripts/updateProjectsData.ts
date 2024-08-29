import fs from "fs";
import endpoints from "~/utils/endpoints";
import fetchWithCredentials from "~/utils/fetch";

const username = "vitoUwu";

(async () => {
  const repos = await fetchWithCredentials(endpoints.repos(username)).then(
    (res) => res.json() as Promise<Repository[]>,
  );
  // .then((repos) => repos.filter((repo) => !repo.fork));

  fs.writeFileSync(
    "utils/repos.ts",
    `// Auto generated file\nexport default ${JSON.stringify(
      repos
        .map((repo) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          href: repo.html_url,
          isFork: repo.fork,
        }))
        .reduce(
          (acc, repo) => {
            acc[repo.name] = repo;
            return acc;
          },
          {} as Record<
            string,
            {
              name: string;
              description: string;
              language: string;
              href: string;
            }
          >,
        ),
      null,
      2,
    )};`,
  );

  const readmes = await Promise.all(
    repos.map(async (repo) =>
      fetchWithCredentials(endpoints.readme(username, repo.name)).then(
        (res) => res.json() as Promise<Content>,
      ),
    ),
  );

  const files = fs.readdirSync("content/projects");
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    fs.unlinkSync(`content/projects/${file}`);
  }

  readmes.forEach((readme, index) => {
    fs.writeFileSync(
      `content/projects/${repos[index].name}.md`,
      Buffer.from(readme.content ?? "", "base64").toString() ||
        "### No content",
    );
  });

  console.log("Projects data updated!");
})();
