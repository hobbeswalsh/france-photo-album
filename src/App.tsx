import { type MouseEvent, type RefObject, useRef, useState } from 'react'
import { narrative } from './narrative'
import { byName, type Photo } from './photos'

// Paging is one slide width of scroll — the strips already snap, so there is no
// index to track. Works for both the pane and the lightbox.
function Arrows({ strip }: { strip: RefObject<HTMLElement | null> }) {
  const page = (dir: number) => (e: MouseEvent) => {
    e.stopPropagation() // a click anywhere in the lightbox closes it
    strip.current?.scrollBy({
      left: dir * strip.current.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <button
        type="button"
        className="page prev"
        aria-label="Previous photo"
        onClick={page(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="page next"
        aria-label="Next photo"
        onClick={page(1)}
      >
        ›
      </button>
    </>
  )
}

export default function App() {
  const [selected, setSelected] = useState<{ photos: string[]; label: string }>(
    {
      photos: [],
      label: '',
    },
  )
  const lightbox = useRef<HTMLDialogElement>(null)
  const pane = useRef<HTMLDivElement>(null)
  const zoomed = useRef<HTMLDivElement>(null)

  const shown = selected.photos.map((name) => byName[name]).filter(Boolean)
  const alt = (photo: Photo) =>
    selected.label || photo.caption || 'Photo from the France trip'

  // showModal() lays the dialog out synchronously, so the strip can be scrolled
  // to the clicked photo before the first paint.
  const open = (index: number) => {
    lightbox.current?.showModal()
    if (zoomed.current)
      zoomed.current.scrollLeft = zoomed.current.clientWidth * index
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

      {/* The strip is its own element so the arrows can sit outside the
          scroller and stay put while it scrolls. */}
      <figure className={shown.length ? 'pane' : 'splash'}>
        {shown.length ? (
          <div className="strip" ref={pane}>
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
          </div>
        ) : (
          <p>Bonjour and bienvenue!</p>
        )}
        {shown.length > 1 && <Arrows strip={pane} />}
      </figure>

      {/* ponytail: <dialog> gives Esc-to-close, focus trap and ::backdrop for free. */}
      <dialog
        ref={lightbox}
        className="lightbox"
        onClick={(e) => e.currentTarget.close()}
      >
        <div className="strip" ref={zoomed}>
          {shown.map((photo) => (
            <img key={photo.name} src={photo.url} alt={alt(photo)} />
          ))}
        </div>
        {shown.length > 1 && <Arrows strip={zoomed} />}
      </dialog>
    </div>
  )
}
