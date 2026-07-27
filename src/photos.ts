// Vite resolves every .webp in src/photos/ to a hashed, base-path-correct URL,
// so dropping a new file in that directory is all it takes to add a photo.
const urls = import.meta.glob<string>('./photos/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

// Keys are photo names. Missing entries just render no caption.
const captions: Record<string, string> = {}

export type Photo = { name: string; url: string; caption: string }

// Filenames are zero-padded, so a plain sort gives album order. The name drops
// the extension: it is what <Pic name="..."> refers to, not a path.
export const photos: Photo[] = Object.entries(urls)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => {
    const name = path.slice(path.lastIndexOf('/') + 1, -'.webp'.length)
    return { name, url, caption: captions[name] ?? '' }
  })

export const byName: Record<string, Photo> = Object.fromEntries(
  photos.map((p) => [p.name, p]),
)
