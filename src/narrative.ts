// The story. Plain strings are prose; objects are clickable terms that swap the
// photo below. `photos` is a list so a term can later open a carousel.
export type Segment = string | { text: string; photos: string[] }

export const narrative: Segment[][] = [
  [
    'We flew into Bordeaux and drove straight out to ',
    { text: 'the dune', photos: ['france-trip-01.webp'] },
    ', then spent what was left of the afternoon on ',
    { text: 'the beach below it', photos: ['france-trip-02.webp', 'france-trip-03.webp'] },
    '.',
  ],
  [
    'This paragraph is placeholder — replace it in src/narrative.ts. Wrap any phrase in ',
    '{ text, photos } to make it clickable, using filenames from src/photos/. ',
    'Everything else is ordinary prose, and this panel scrolls once it outgrows its 20%.',
  ],
]
