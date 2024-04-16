export default async function fetchWithCredentials(url: string) {
  return fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
}
