# france-album

React + TypeScript SPA built with Vite, deployed to GitHub Pages.

```sh
bun install
bun dev           # dev server
bun run fix       # oxlint --fix + oxfmt
bun run validate  # oxlint + oxfmt --check (what CI runs)
bun run build
```

No test suite — per `CLAUDE.md` this repo enforces linting and formatting only.
oxfmt owns JS/TS formatting; `.editorconfig` keeps editors from fighting it.

## Photos

Drop WebP files into `src/photos/` — `src/photos.ts` globs the directory, so no code
change is needed to add one. Names must stay zero-padded (`france-trip-07.webp`); the
sort that produces album order is lexicographic. Captions go in the `captions` map in
`src/photos.ts`, keyed by filename.

MP4s live in the same directory and work the same way, except they are named
`france-vid-NN.mp4` — Photos restarts its numbering for a video-only export, so
sharing the `france-trip-` prefix would collide with unrelated stills. A
`<Pic name="france-vid-01">` plays in the pane with native controls (which is also
where fullscreen comes from) rather than opening the lightbox.

To convert a fresh Apple Photos export (JPEG, Maximum quality, **sRGB** profile):

```fish
for f in ~/Desktop/France-Trip/*.jpeg
    set -l n (string match -r '(\d+)\.jpeg$' -- $f)[2]
    magick $f -resize '2000x2000>' -strip -quality 80 -define webp:method=6 \
        src/photos/(printf 'france-trip-%02d.webp' $n)
end
```

## Deployment

`.github/workflows/deploy.yml` validates, builds and publishes to GitHub Pages
on every push to `main`. One-time setup: **Settings > Pages > Source > GitHub Actions**.

`vite.config.ts` derives `base` from `$GITHUB_REPOSITORY`, so the project-site
subpath survives a repo rename. A user/org site (`<user>.github.io`) would need
`base: '/'` instead.
