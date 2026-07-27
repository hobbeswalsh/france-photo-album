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
      <Pic name="france-trip-11">steed</Pic> to France's biggest dune at
      Arcachon. After walking up <Pic name="france-trip-12">pavement</Pic> and{' '}
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
      </Pic>{' '}
      Then we <Pic name="france-trip-19">ran down</Pic> the dune really fast.
      Our visit to the <Pic name="france-trip-20">"Aquapark"</Pic> is not
      pictured becuase we didn't bring a phone in. And if anyone can figure out
      what an "Oxoon Jetkid" is, please get in touch.
    </p>
    <p>
      We finally arrived in Saint-Jean-de-Luz to 40ºC temperatures, so we headed
      to <Pic name={['france-trip-21', 'france-trip-22']}>the ocean</Pic>. A
      friend{' '}
      <Pic
        name={[
          'france-trip-23',
          'france-trip-26',
          'france-trip-27',
          'france-trip-28',
        ]}
      >
        (Hi Nicole and Seb!)
      </Pic>{' '}
      met us for dinner in fabulous <Pic name="france-trip-25">Guethary</Pic>{' '}
      and we had a great (if insect-infested) meal.
    </p>
    <p>
      The next morning was Biarritz. It had what you might expect from a coastal
      French town: <Pic name="france-trip-30">pastries,</Pic>{' '}
      <Pic name="france-trip-29">surfboards and Acai bowls,</Pic>{' '}
      <Pic name="france-trip-31">a nice beach,</Pic> and a trail for{' '}
      <Pic name="france-trip-32">Robin to get lost on</Pic>. There was a cool
      promenade out to a{' '}
      <Pic name={['france-trip-33', 'france-trip-35', 'france-trip-39']}>
        viewpoint
      </Pic>
      , even if sometimes we{' '}
      <Pic name={['france-trip-37', 'france-trip-38']}>
        didn't know what we were viewing
      </Pic>{' '}
      exactly.
    </p>
  </>
)
