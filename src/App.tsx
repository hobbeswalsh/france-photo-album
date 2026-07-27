import {
  type MouseEvent,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { narrative } from './narrative'
import { type Selected, SelectPhotos } from './Pic'
import { byName, type Photo } from './photos'

// A stack's slides are each as wide as their own photo, so paging lands on the
// next slide's edge rather than moving a fixed distance. Those edges are also the
// snap positions, which is what keeps this in step with a scroll or a swipe —
// still no index to track. Works for the lightbox too, where slides are uniform.
const page = (
  el: HTMLElement | null,
  dir: number,
  behavior: ScrollBehavior,
) => {
  if (!el) return
  const left = el.getBoundingClientRect().left
  const edges = [...el.children].map(
    (slide) => slide.getBoundingClientRect().left - left + el.scrollLeft,
  )
  // The 1px slack keeps a fractional resting offset from matching its own edge.
  const to =
    dir > 0
      ? edges.find((x) => x > el.scrollLeft + 1)
      : edges.filter((x) => x < el.scrollLeft - 1).pop()
  // Zoomed in, one photo fills the screen and 'instant' cuts straight to the next
  // one. Zoomed out, several are on screen at once and a cut is hard to follow —
  // there, seeing them travel is what says which way you went.
  if (to !== undefined) el.scrollTo({ left: to, behavior })
}

// Only the scroll position decides which arrow shows, so `count` is enough to
// re-measure on a new selection.
function Arrows({
  strip,
  count,
  behavior,
}: {
  strip: RefObject<HTMLElement | null>
  count: number
  behavior: ScrollBehavior
}) {
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  useEffect(() => {
    const el = strip.current
    if (!el) return
    // Snapping leaves fractional offsets, hence the 1px slack at both ends.
    const measure = () => {
      setAtStart(el.scrollLeft < 1)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    // The lightbox strip has no size until the dialog opens, so opening it —
    // like a window resize — changes the edges without a scroll ever firing.
    const resize = new ResizeObserver(measure)
    resize.observe(el)
    return () => {
      el.removeEventListener('scroll', measure)
      resize.disconnect()
    }
  }, [strip, count])

  const click = (dir: number) => (e: MouseEvent) => {
    e.stopPropagation() // a click anywhere in the lightbox closes it
    page(strip.current, dir, behavior)
  }

  return (
    <>
      {!atStart && (
        <button
          type="button"
          className="page prev"
          aria-label="Previous photo"
          onClick={click(-1)}
        >
          ‹
        </button>
      )}
      {!atEnd && (
        <button
          type="button"
          className="page next"
          aria-label="Next photo"
          onClick={click(1)}
        >
          ›
        </button>
      )}
    </>
  )
}

export default function App() {
  const [selected, setSelected] = useState<Selected>({ photos: [], label: '' })
  const lightbox = useRef<HTMLDialogElement>(null)
  const pane = useRef<HTMLDivElement>(null)
  const zoomed = useRef<HTMLDivElement>(null)

  const shown = selected.photos.map((name) => byName[name]).filter(Boolean)
  const alt = (photo: Photo) =>
    selected.label || photo.caption || 'Photo from the France trip'

  // Arrow keys page whichever strip is on screen, from anywhere on the page.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
      if (!dir) return
      e.preventDefault() // otherwise the arrows also scroll the page sideways
      const zoom = lightbox.current?.open
      page(
        zoom ? zoomed.current : pane.current,
        dir,
        zoom ? 'instant' : 'smooth',
      )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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
        <SelectPhotos value={setSelected}>{narrative}</SelectPhotos>
      </article>

      {/* The strip is its own element so the arrows can sit outside the
          scroller and stay put while it scrolls. */}
      <figure className={shown.length ? 'pane' : 'splash'}>
        {shown.length ? (
          <div
            className={shown.length > 1 ? 'strip nudge' : 'strip'}
            ref={pane}
          >
            {shown.map((photo, i) => (
              // The label is in the key so a new selection always mounts fresh
              // slides -- that is what replays the peek, even for a photo the
              // last selection also showed.
              <button
                key={selected.label + photo.name}
                type="button"
                className="zoom"
                onClick={() => open(i)}
              >
                <img src={photo.url} alt={alt(photo)} />
              </button>
            ))}
          </div>
        ) : (
          <p>Bonjour et bienvenue! 🥖</p>
        )}
        {shown.length > 1 && (
          <Arrows strip={pane} count={shown.length} behavior="smooth" />
        )}
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
        {shown.length > 1 && (
          <Arrows strip={zoomed} count={shown.length} behavior="instant" />
        )}
      </dialog>
    </div>
  )
}
