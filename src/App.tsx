import { useRef, useState } from 'react'
import { narrative } from './narrative'
import { byName, photos } from './photos'

export default function App() {
  // ponytail: a term may name several photos; we render the first. Upgrade path is a
  // carousel over `photos`, which needs no change to narrative.ts.
  const [selected, setSelected] = useState({ name: photos[0].name, label: '' })
  const photo = byName[selected.name]
  const lightbox = useRef<HTMLDialogElement>(null)
  const alt = selected.label || photo?.caption || 'Photo from the France trip'

  return (
    <div className="app">
      <article>
        {narrative.map((paragraph, p) => (
          <p key={p}>
            {paragraph.map((segment, s) =>
              typeof segment === 'string' ? (
                segment
              ) : (
                <button
                  key={s}
                  type="button"
                  className="term"
                  onClick={() =>
                    setSelected({
                      name: segment.photos[0],
                      label: segment.text,
                    })
                  }
                >
                  {segment.text}
                </button>
              ),
            )}
          </p>
        ))}
      </article>

      <figure>
        {photo && (
          <button
            type="button"
            className="zoom"
            onClick={() => lightbox.current?.showModal()}
          >
            <img src={photo.url} alt={alt} />
          </button>
        )}
      </figure>

      {/* ponytail: <dialog> gives Esc-to-close, focus trap and ::backdrop for free. */}
      <dialog
        ref={lightbox}
        className="lightbox"
        onClick={(e) => e.currentTarget.close()}
      >
        {photo && <img src={photo.url} alt={alt} />}
      </dialog>
    </div>
  )
}
