# Carolyn Stripling — Portfolio

Minimal white-on-black portfolio built with Vite, React, and TypeScript. Deployed with GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Edit projects

Update the list in [`src/data/projects.ts`](src/data/projects.ts).

## Deploy to GitHub Pages

1. Push this repo to `https://github.com/cjstripli/portfolio`
2. In the repo settings, set Pages source to the `gh-pages` branch
3. Run:

```bash
npm run deploy
```

The site will be at `https://cjstripli.github.io/portfolio/`.

If the repository name is not `portfolio`, change `base` in `vite.config.ts` to match (`base: '/your-repo-name/'`).
