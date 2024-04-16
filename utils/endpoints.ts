export default {
  repos: (username: string) =>
    `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&type=public`,
  readme: (username: string, repo: string) =>
    `https://api.github.com/repos/${username}/${repo}/contents/README.md`,
};
