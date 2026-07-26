import { useRef, useState } from 'react'
import { narrative } from './narrative'
import { byName, photos, type Photo } from './photos'

export default function App() {
  const [selected, setSelected] = useState({
    photos: [photos[0].name],
    label: '',
  })
  const lightbox = useRef<HTMLDialogElement>(null)
  const strip = useRef<HTMLDivElement>(null)

  const shown = selected.photos.map((name) => byName[name]).filter(Boolean)
  const alt = (photo: Photo) =>
    selected.label || photo.caption || 'Photo from the France trip'

  // showModal() lays the dialog out synchronously, so the strip can be scrolled
  // to the clicked photo before the first paint.
  const open = (index: number) => {
    lightbox.current?.showModal()
    if (strip.current)
      strip.current.scrollLeft = strip.current.clientWidth * index
  }

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
                      photos: segment.photos,
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

      <figure className="strip">
        {shown.map((photo, i) => (
          <button
            key={photo.name}
            type="button"
            className="zoom"
            onClick={() => open(i)}
          >
            <img src={photo.url} alt={alt(photo)} />
          </button>
        ))}
      </figure>

      {/* ponytail: <dialog> gives Esc-to-close, focus trap and ::backdrop for free. */}
      <dialog
        ref={lightbox}
        className="lightbox"
        onClick={(e) => e.currentTarget.close()}
      >
        <div className="strip" ref={strip}>
          {shown.map((photo) => (
            <img key={photo.name} src={photo.url} alt={alt(photo)} />
          ))}
        </div>
      </dialog>
    </div>
  )
}
