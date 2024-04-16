import fs from "fs";
import endpoints from "~/utils/endpoints";
import fetchWithCredentials from "~/utils/fetch";

const username = "vitoUwu";

(async () => {
  const repos = await fetchWithCredentials(endpoints.repos(username))
    .then((res) => res.json() as Promise<Repository[]>)
    .then((repos) =>
      repos
        .filter((repo) => !repo.fork)
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        )
    );

  fs.writeFileSync(
    "utils/repos.ts",
    `// Auto generated file\nexport default ${JSON.stringify(
      repos
        .map((repo) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          href: repo.html_url,
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
          >
        ),
      null,
      2
    )};`
  );

  const readmes = await Promise.all(
    repos.map(async (repo) =>
      fetchWithCredentials(endpoints.readme(username, repo.name)).then(
        (res) => res.json() as Promise<Content>
      )
    )
  );

  readmes.forEach((readme, index) => {
    fs.writeFileSync(
      `content/projects/${repos[index].name}.md`,
      Buffer.from(readme.content ?? "", "base64").toString() || "### No content"
    );
  });

  console.log("Projects data updated!");
})();
