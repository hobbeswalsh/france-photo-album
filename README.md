# france-album

React + TypeScript SPA built with Vite, deployed to GitHub Pages.

```sh
bun install
bun dev      # dev server
bun run test # vitest
bun run lint # oxlint
bun run build
```

## Deployment

`.github/workflows/deploy.yml` lints, tests, builds and publishes to GitHub Pages
on every push to `main`. One-time setup: **Settings > Pages > Source > GitHub Actions**.

`vite.config.ts` derives `base` from `$GITHUB_REPOSITORY`, so the project-site
subpath survives a repo rename. A user/org site (`<user>.github.io`) would need
`base: '/'` instead.
