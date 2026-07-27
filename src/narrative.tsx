import { Pic } from './Pic'

// The story. Ordinary prose, except that a <Pic> makes the phrase it wraps
// clickable and swaps the photo below. `name` takes a list to open a carousel.
export const narrative = (
  <>
    <p>
      We flew into Bordeaux and drove straight out to{' '}
      <Pic name="france-trip-01">the dune</Pic>, then spent what was left of the
      afternoon on{' '}
      <Pic name={['france-trip-07', 'france-trip-09']}>the beach below it</Pic>.
    </p>
    <p>
      This paragraph is placeholder — replace it in src/narrative.tsx. Wrap any
      phrase in {'<Pic name="france-trip-01">'} to make it clickable, naming
      files from src/photos/ without the .webp. Everything else is ordinary
      prose, and this panel scrolls once it outgrows its 20%.
    </p>
  </>
)
