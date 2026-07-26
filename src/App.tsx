import { useEffect, useState } from 'react'
import { photos } from './photos'

export default function App() {
  const [index, setIndex] = useState(0)
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + photos.length) % photos.length)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="app">
      <header>
        <h1>France Album</h1>
        <p>
          {photo.caption ||
            'Add captions in src/photos.ts, keyed by filename. This panel scrolls on its own when the text runs long.'}
        </p>
      </header>

      <figure>
        <img src={photo.url} alt={photo.caption || `Photo ${index + 1} from the France trip`} />
        <button
          type="button"
          className="nav prev"
          aria-label="Previous photo"
          onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
        >
          ‹
        </button>
        <button
          type="button"
          className="nav next"
          aria-label="Next photo"
          onClick={() => setIndex((i) => (i + 1) % photos.length)}
        >
          ›
        </button>
        <figcaption>
          {index + 1} / {photos.length}
        </figcaption>
      </figure>
    </div>
  )
}
