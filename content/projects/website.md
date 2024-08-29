<p align="center">
  <img alt="nuxt logo" src="https://github.com/vitoUwu/website/assets/32278696/c62f6f72-4298-4f70-adbe-57c4a12c7f35">
</p>

<h1 align="center">My website</h1>
<p align="center">made with nuxt.js and ❤️</p>

The cool thing about this project is that the content found in `/projects` comes from github, a script located in `scripts/updateProjectsData.ts` is what makes this thing happen.

Initially I was making it so that every time someone entered /projects, a request was made to github to get all my repositories and then show them all on the page, but a problem I faced was the rate limit, so I thought , I don't need to update this every time someone enters the page, that's when I made this script, every time I run it, it edits the file in `utils/repos.ts`, where some of the data from all public repositories, and in content/\*.md, where it takes the projects' "readme.md" files and saves them locally.

This also works in `/project/[slug]`, which renders .md files

## How to run it locally

### Dependencies

[Bun](https://bun.sh/)

[Git](https://git-scm.com/)

### Clone

```bash
git clone https://github.com/vitoUWu/website && cd website
```

### Running

```bash
bun run dev
```

Now enter `localhost:3000` to access locally
