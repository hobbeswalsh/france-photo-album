import { Pic } from './Pic'

// The story. Ordinary prose, except that a <Pic> makes the phrase it wraps
// clickable and swaps the photo below. `name` takes a list to open a carousel.
export const narrative = (
  <>
    <p>
      Our trip started on the early side -- the VERY early side. We got to the
      airport 15 minutes before the ticket counter even opened, so we took the
      opportunity to ask a stranger to take our{' '}
      <Pic name="france-trip-01">family portrait.</Pic> Then we{' '}
      <Pic name="france-trip-02">burned our brains out</Pic> on the flight
      instead of sleeping. We could always make up sleep{' '}
      <Pic name="france-trip-03">later.</Pic> Our first stopover was in
      Bordeaux, at a cute little hotel, good for{' '}
      <Pic name="france-trip-05">snuggling</Pic>,{' '}
      <Pic name="france-trip-06">journaling</Pic>, and{' '}
      <Pic name="france-trip-08">continental breakfast</Pic>. Oh, and did I
      mention <Pic name="france-trip-09">sleeping?</Pic>
    </p>
    <p>
      After breakfast, we drove our trusty{' '}
      <Pic name="france-trip-11">steed</Pic> to the dune at Arcachon. After
      walking up <Pic name="france-trip-12">pavement</Pic> and{' '}
      <Pic name="france-trip-13">sand</Pic>, we saw the Atlantic Ocean and got
      some Instagram-ready{' '}
      <Pic
        name={[
          'france-trip-14',
          'france-trip-15',
          'france-trip-16',
          'france-trip-17',
          'france-trip-18',
        ]}
      >
        photos.
      </Pic>
    </p>
  </>
)
