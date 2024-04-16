export default {
  repos: (username: string) => `https://api.github.com/users/${username}/repos`,
  readme: (username: string, repo: string) =>
    `https://api.github.com/repos/${username}/${repo}/contents/README.md`,
};
