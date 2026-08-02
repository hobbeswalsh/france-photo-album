import { Pic } from './Pic'

// The story. Ordinary prose, except that a <Pic> makes the phrase it wraps
// clickable and swaps the photo below. `name` takes a list to open a carousel.
// A `france-vid-NN` name is an mp4 and plays in the same pane, with controls.
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
      exactly. After some <Pic name="france-trip-42">climbing,</Pic>{' '}
      <Pic name="france-trip-44">posing,</Pic> and{' '}
      <Pic name="france-trip-47">exploring,</Pic> it was time for that most
      hallowed of traditions:{' '}
      <Pic name={['france-trip-48', 'france-trip-49', 'france-trip-50']}>
        picnic and ice cream!
      </Pic>
    </p>
    <p>
      In the afternoon we went to see Robin's college roomate{' '}
      <Pic name="france-trip-51">(shout out to Willy C, Zeïna, and Mila!)</Pic>.
      They gave us the idea to take the <Pic name="france-trip-52">ferry</Pic>{' '}
      across the river to <Pic name="france-trip-55">Honarribia in Spain</Pic>.
      Apparently the way it's done there is to have one{' '}
      <Pic name="france-trip-56">one giant dinner</Pic> followed immediately by{' '}
      <Pic name="france-trip-58">another.</Pic> A{' '}
      <Pic name={['france-trip-62', 'france-trip-61', 'france-trip-60']}>
        late ferry back
      </Pic>{' '}
      to our <Pic name="france-trip-64">canvas home</Pic> was the only thing
      left to do.
    </p>
    <p>
      Alas, we needed to leave the Atlantic coast, but not before a stop at the
      famous{' '}
      <Pic name={['france-trip-67', 'france-trip-68', 'france-trip-69']}>
        St-Jean-de-Luz market
      </Pic>{' '}
      and a{' '}
      <Pic name={['france-trip-72', 'france-trip-73', 'france-trip-75']}>
        cute mechanical train
      </Pic>{' '}
      that gave us a{' '}
      <Pic
        name={[
          'france-trip-77',
          'france-trip-78',
          'france-trip-79',
          'france-trip-80',
        ]}
      >
        nice view
      </Pic>{' '}
      of our surroundings some time to{' '}
      <Pic
        name={[
          'france-trip-82',
          'france-trip-84',
          'france-trip-86',
          'france-trip-87',
        ]}
      >
        pet horsies and build cairns
      </Pic>
      . We were headed to the <Pic name="france-trip-108">Pyrénées</Pic>. Our
      lodging was a{' '}
      <Pic name={['france-trip-88', 'france-trip-89', 'france-trip-91']}>
        super-cute gite
      </Pic>{' '}
      that served us a home-made dinner as well as a local{' '}
      <Pic name="france-trip-90">local cheese course</Pic>.
    </p>
    <p>
      The only full day in the mountains was devoted to a{' '}
      <Pic name="france-trip-97">hike to Lac D'Estom</Pic>, with{' '}
      <Pic name="france-vid-01">ice-cold water to run into</Pic> along the way.
      We'll let the pictures{' '}
      <Pic
        name={[
          'france-trip-99',
          'france-trip-100',
          'france-trip-102',
          'france-trip-103',
          'france-trip-104',
          'france-trip-105',
          'france-trip-106',
          'france-trip-107',
          'france-trip-110',
          'france-trip-116',
          'france-trip-117',
          'france-trip-119',
          'france-trip-121',
          'france-trip-122',
          'france-trip-123',
          'france-trip-125',
          'france-trip-126',
          'france-trip-127',
          'france-trip-128',
          'france-trip-132',
          'france-trip-133',
          'france-trip-134',
          'france-trip-141',
          'france-trip-143',
          'france-trip-147',
          'france-trip-149',
          'france-trip-150',
          'france-trip-152',
        ]}
      >
        speak for themselves
      </Pic>
      .
    </p>
  </>
)
