import { Pic, Vid } from './Pic'

// The story. Ordinary prose, except that a <Pic> makes the phrase it wraps
// clickable and swaps the photo below. `name` is the shot number; a list opens
// a carousel. <Vid> is the same but plays an mp4 in the pane, with controls.
export const narrative = (
  <>
    <p>
      Our trip started on the early side -- the VERY early side. We got to the
      airport 15 minutes before the ticket counter even opened, so we took the
      opportunity to ask a stranger to take our{' '}
      <Pic name="01">family portrait.</Pic> Then we{' '}
      <Pic name="02">burned our brains out</Pic> on the flight instead of
      sleeping. We could always make up sleep <Pic name="03">later.</Pic> Our
      first stopover was in Bordeaux, at a cute little hotel, good for{' '}
      <Pic name="05">snuggling</Pic>, <Pic name="06">journaling</Pic>, and{' '}
      <Pic name="08">continental breakfast</Pic>. Oh, and did I mention{' '}
      <Pic name="09">sleeping?</Pic>
    </p>
    <p>
      After breakfast, we drove our trusty <Pic name="11">steed</Pic> to
      France's biggest dune at Arcachon. After walking up{' '}
      <Pic name="12">pavement</Pic> and <Pic name="13">sand</Pic>, we saw the
      Atlantic Ocean and got some Instagram-ready{' '}
      <Pic name={['14', '15', '16', '17', '18']}>photos.</Pic> Then we{' '}
      <Pic name="19">ran down</Pic> the dune really fast. Our visit to the{' '}
      <Pic name="20">"Aquapark"</Pic> is not pictured becuase we didn't bring a
      phone in. And if anyone can figure out what an "Oxoon Jetkid" is, please
      get in touch.
    </p>
    <p>
      We finally arrived in Saint-Jean-de-Luz to 40ºC temperatures, so we headed
      to <Pic name={['21', '22']}>the ocean</Pic>. A friend{' '}
      <Pic name={['23', '26', '27', '28']}>(Hi Nicole and Seb!)</Pic> met us for
      dinner in fabulous <Pic name="25">Guethary</Pic> and we had a great (if
      insect-infested) meal.
    </p>
    <p>
      The next morning was Biarritz. It had what you might expect from a coastal
      French town: <Pic name="30">pastries,</Pic>{' '}
      <Pic name="29">surfboards and Acai bowls,</Pic>{' '}
      <Pic name="31">a nice beach,</Pic> and a trail for{' '}
      <Pic name="32">Robin to get lost on</Pic>. There was a cool promenade out
      to a <Pic name={['33', '35', '39']}>viewpoint</Pic>, even if sometimes we{' '}
      <Pic name={['37', '38']}>didn't know what we were viewing</Pic> exactly.
      After some <Pic name="42">climbing,</Pic> <Pic name="44">posing,</Pic> and{' '}
      <Pic name="47">exploring,</Pic> it was time for that most hallowed of
      traditions: <Pic name={['48', '49', '50']}>picnic and ice cream!</Pic>
    </p>
    <p>
      In the afternoon we went to see Robin's college roomate{' '}
      <Pic name="51">(shout out to Willy C, Zeïna, and Mila!)</Pic>. They gave
      us the idea to take the <Pic name="52">ferry</Pic> across the river to{' '}
      <Pic name="55">Honarribia in Spain</Pic>. Apparently the way it's done
      there is to have one <Pic name="56">one giant dinner</Pic> followed
      immediately by <Pic name="58">another.</Pic> A{' '}
      <Pic name={['62', '61', '60']}>late ferry back</Pic> to our{' '}
      <Pic name="64">canvas home</Pic> was the only thing left to do.
    </p>
    <p>
      Alas, we needed to leave the Atlantic coast, but not before a stop at the
      famous <Pic name={['67', '68', '69']}>St-Jean-de-Luz market</Pic> and a{' '}
      <Pic name={['72', '73', '75']}>cute mechanical train</Pic> that gave us a{' '}
      <Pic name={['77', '78', '79', '80']}>nice view</Pic> of our surroundings
      some time to{' '}
      <Pic name={['82', '84', '86', '87']}>pet horsies and build cairns</Pic>.
      We were headed to the <Pic name="108">Pyrénées</Pic>. Our lodging was a{' '}
      <Pic name={['88', '161', '89']}>super-cute gite</Pic> that served us a
      home-made dinner as well as a local{' '}
      <Pic name="90">local cheese course</Pic>.
    </p>
    <p>
      The only full day in the mountains was devoted to a{' '}
      <Pic name="97">hike to Lac D'Estom</Pic>. We'll let the pictures{' '}
      <Pic
        name={[
          '99',
          '100',
          '102',
          '103',
          '104',
          '105',
          '106',
          '107',
          '110',
          '116',
          '117',
          '119',
          '121',
          '122',
          '123',
          '125',
          '126',
          '127',
          '128',
          '132',
          '133',
          '134',
          '141',
          '143',
          '147',
          '149',
          '150',
          '152',
        ]}
      >
        speak for themselves
      </Pic>
      . It was hot, so we found <Vid name="01">creative ways to stay cool</Vid>.
      In true French fashion, the <em>refuge</em> at the lake served impeccable{' '}
      <Pic name={['144', '146', '145']}>wild blueberry tarts and brownies</Pic>.
      After a quick stop for <Pic name="155">saucisson</Pic> and{' '}
      <Pic name="156">cornichons</Pic>, we drove up a{' '}
      <Pic name="157">steep hill</Pic> to a{' '}
      <Pic name={['158', '159']}>cute restaurant for dinner</Pic>.
    </p>
    <p>
      Unfortunately, our time in the mountains came to an end. The upside of the
      long <Pic name="178">drive</Pic> to Carcassonne the next day was a few
      hours at an animal farm, which featured{' '}
      <Pic name={['167', '169']}>goats</Pic>, <Pic name="171">rabbits</Pic>, and{' '}
      <Pic name={['172', '173']}>guinea pigs</Pic>. Robin did some research and
      found a really cool goat cheese farm{' '}
      <Pic name={['177']}>WAY off the beaten path</Pic>. The only problem was
      that it was not a cheese making facility at all, but rather a{' '}
      <Pic name="179">barn full of goats</Pic>. Was the 40 minute detour worth
      it?
    </p>
    <p>
      Carcassonne was next, as a stopover between the Basque country and
      Provence. What do we remember about Carcassonne? Let's see:{' '}
      <Pic name={['182', '183']}>narrow sidewalks</Pic>, medieval{' '}
      <Pic name="184">towers</Pic> and <Pic name="185">streets</Pic>, and{' '}
      <Pic name="186">churches</Pic> where you <Pic name="187">pray</Pic> for
      your parents to be done looking at churches.{' '}
      <Pic name="189">Defensible gates</Pic> and <Pic name="190">ramparts</Pic>.{' '}
      <Pic name="191">Dinner</Pic> on pedestrian streets.{' '}
      <Pic name="193">A morning run</Pic>, then{' '}
      <Pic name="196">breakfast outdoors</Pic>.{' '}
      <Pic name="201">Eli, Eli, lama saba... et cetera.</Pic>{' '}
      <Pic name="199">Orangina?</Pic>
    </p>
    <p>
      Another long, hot day of driving was broken up with a{' '}
      <Pic name="205">swimming</Pic> and{' '}
      <Pic name="206">wildlife-gathering</Pic> stop on the{' '}
      <Pic name="203">banks of the Gardon</Pic>. When we finally arrived at our
      Provence Airbnb, the most important thing to do was to get in the{' '}
      <Pic name="209">above-ground pool</Pic> and cool off for the evening.
    </p>
    <p>
      We needed to be fresh for a big day in{' '}
      <Pic name="210">Aix-en-Provence</Pic>! We had a lot on our list, including{' '}
      <Pic name={['211', '212', '226']}>the open-air market</Pic>,{' '}
      <Pic name="225">narrow streets</Pic>, an{' '}
      <Pic name="215">estate/museum</Pic> with a{' '}
      <Pic name="216">Toulouse-Lautrec</Pic> exhibit, and a cathedral (where one
      can <Pic name="229">pray</Pic> to be done with{' '}
      <Pic name="214">museums</Pic>
      ). We also encountered a strange photo booth that returned{' '}
      <Pic name={['219', '222']}>AI-enhanced</Pic> photos of the kids, and of{' '}
      <Pic name="220">Robin and... is that Diane??</Pic> That evening, D
      prepared a <Pic name="231">fantastic French meal</Pic> with goodies from
      the market.
    </p>
    <p>
      We had planned to hike out to the Calanques the next day, but fire danger
      closed the trail. What a <Pic name="234">shame</Pic>. We would need to{' '}
      <Pic name="237">change plans</Pic> and{' '}
      <Pic name="241">swim in the Mediterranean</Pic> instead. Maybe even do
      some <Pic name="239">cliff jumping</Pic>. Perhaps a trip into{' '}
      <Pic name={['243', '244', '247']}>Cassis</Pic>.
    </p>
    <p>
      Having dealt with this extreme adversity in Provence, we were{' '}
      <Pic name="253">ready</Pic> for the train ride to Paris. Well,{' '}
      <Pic name="252">ready enough, anyway</Pic>. Here is Robin{' '}
      <Pic name="251">pretending to understand</Pic> an SNCF employee. In spite
      of his best efforts to the contrary, we found the right plaform and
      managed to <Pic name={['255', '256', '257']}>get on the train</Pic>.
    </p>
    <p>
      Through the crowded <Pic name="258">Gare de Lyon</Pic>,{' '}
      <Pic name="259">Métro stop</Pic>, and <Pic name="261">Paris streets</Pic>,
      we found the <Pic name="262">front door</Pic> and eventually made it in to
      our <Pic name="263">apartment</Pic> by late afternoon. It had{' '}
      <Pic name="264">balconies!</Pic> No rest for the weary, though: we had a
      city to explore! When in Paris, one simply must get in at least a little{' '}
      <Pic name="269">retail</Pic>, <Pic name="268">fountain-spotting</Pic>,
      maybe a little <Pic name="270">soup à l'oignon</Pic>... part of a{' '}
      <Pic name={['272', '273']}>scrumptious</Pic> open-air{' '}
      <Pic name="271">bistro dinner</Pic>. Oh, and one mustn't miss{' '}
      <Pic name={['276', '278']}>golden hour</Pic> or{' '}
      <Pic name="280">ice cream</Pic>.
    </p>
    <p>
      It was very important to <Pic name="281">brush up</Pic> on our language
      skills the next day. How else would we <Pic name="284">decide</Pic> which
      pastry to <Pic name="285">eat</Pic> from the{' '}
      <Pic name="283">dizzying array</Pic> of choices? After replenishing our
      carbs and sugar, we felt prepared to <Vid name="02">drive the métro</Vid>{' '}
      to <Pic name={['290', '291', '292']}>Montmartre</Pic>. Obviously,{' '}
      <Pic name="293">hot cocoa</Pic> was on the menu. Another{' '}
      <Pic name={['294', '301']}>magic métro</Pic> ride led us to{' '}
      <Pic name="298">glass-covered malls</Pic>,{' '}
      <Pic name="297">glass-covered streets</Pic>,{' '}
      <Pic name={'296'}>open-air cafés</Pic>,{' '}
      <Pic name="295">open-air card games</Pic>, and eventually,{' '}
      <Pic name={['303', '302']}>strange and unnatural human faces</Pic>.
    </p>
    <p>
      Dinner wrapped up at about 9pm... a perfect time to go{' '}
      <Pic name={['306', '307']}>climb a tower</Pic>? After waiting in a long
      ticket line, we climbed{' '}
      <Pic name={['423', '309', '310']}>approximately 674 stairs</Pic> and were
      rewarded with a nice view of the <Pic name="311">Champ de Mars</Pic> and
      of Gustave Eiffel's <Pic name={'313'}>masterpiece</Pic>. She gave us a{' '}
      <Vid name={'03'}>nice show</Vid> on the way down, too.
    </p>
    <p>
      By this time, our days were getting predictable. Dear reader, I bet you
      can even{' '}
    </p>
  </>
)
