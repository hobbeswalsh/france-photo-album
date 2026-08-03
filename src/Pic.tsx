import { createContext, useContext } from 'react'

export type Selected = { photos: string[]; label: string }

// A <Pic> sits deep inside the prose, nowhere near the pane that renders the
// photos, so the setter travels by context instead of through every paragraph.
// oxlint-disable-next-line react/only-export-components
export const SelectPhotos = createContext<(selected: Selected) => void>(
  () => {},
)

// Children double as the alt text for the photos, so keep them a plain string.
export function Pic({
  name,
  children,
}: {
  name: string | string[]
  children: string
}) {
  const select = useContext(SelectPhotos)
  return (
    <button
      type="button"
      className="term"
      onClick={() => select({ photos: [name].flat(), label: children })}
    >
      {children}
    </button>
  )
}
