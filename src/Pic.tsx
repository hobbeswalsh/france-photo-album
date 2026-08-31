import { createContext, useContext } from 'react'

export type Selected = { photos: string[]; label: string }

// A <Pic> sits deep inside the prose, nowhere near the pane that renders the
// photos, so the setter travels by context instead of through every paragraph.
// oxlint-disable-next-line react/only-export-components
export const SelectPhotos = createContext<(selected: Selected) => void>(
  () => {},
)

type TermProps = { name: string | string[]; children: string }

// Children double as the alt text for the photos, so keep them a plain string.
function Term({ prefix, name, children }: TermProps & { prefix: string }) {
  const select = useContext(SelectPhotos)

  // The prose passes bare shot numbers; the full photo name lives here, so a
  // rename of the export batch touches one file. Pad so "1" finds "01".
  const photos = [name].flat().map((n) => `${prefix}-${n.padStart(2, '0')}`)

  return (
    <button
      type="button"
      className="term"
      onClick={() => select({ photos, label: children })}
    >
      {children}
    </button>
  )
}

// <Pic name="123"> shows france-trip-123.webp.
export function Pic(props: TermProps) {
  return <Term prefix="france-trip" {...props} />
}

// <Vid name="01"> plays france-vid-01.mp4.
export function Vid(props: TermProps) {
  return <Term prefix="france-vid" {...props} />
}
