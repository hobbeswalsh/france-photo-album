import { Pic } from "./Pic";

// The story. Ordinary prose, except that a <Pic> makes the phrase it wraps
// clickable and swaps the photo below. `name` takes a list to open a carousel.
// A `france-vid-NN` name is an mp4 and plays in the same pane, with controls.
export const narrative = (
	<>
		<p>
			Our trip started on the early side -- the VERY early side. We got to the
			airport 15 minutes before the ticket counter even opened, so we took the
			opportunity to ask a stranger to take our{" "}
			<Pic name="france-trip-01">family portrait.</Pic> Then we{" "}
			<Pic name="france-trip-02">burned our brains out</Pic> on the flight
			instead of sleeping. We could always make up sleep{" "}
			<Pic name="france-trip-03">later.</Pic> Our first stopover was in
			Bordeaux, at a cute little hotel, good for{" "}
			<Pic name="france-trip-05">snuggling</Pic>,{" "}
			<Pic name="france-trip-06">journaling</Pic>, and{" "}
			<Pic name="france-trip-08">continental breakfast</Pic>. Oh, and did I
			mention <Pic name="france-trip-09">sleeping?</Pic>
		</p>
		<p>
			After breakfast, we drove our trusty{" "}
			<Pic name="france-trip-11">steed</Pic> to France's biggest dune at
			Arcachon. After walking up <Pic name="france-trip-12">pavement</Pic> and{" "}
			<Pic name="france-trip-13">sand</Pic>, we saw the Atlantic Ocean and got
			some Instagram-ready{" "}
			<Pic
				name={[
					"france-trip-14",
					"france-trip-15",
					"france-trip-16",
					"france-trip-17",
					"france-trip-18",
				]}
			>
				photos.
			</Pic>{" "}
			Then we <Pic name="france-trip-19">ran down</Pic> the dune really fast.
			Our visit to the <Pic name="france-trip-20">"Aquapark"</Pic> is not
			pictured becuase we didn't bring a phone in. And if anyone can figure out
			what an "Oxoon Jetkid" is, please get in touch.
		</p>
		<p>
			We finally arrived in Saint-Jean-de-Luz to 40ºC temperatures, so we headed
			to <Pic name={["france-trip-21", "france-trip-22"]}>the ocean</Pic>. A
			friend{" "}
			<Pic
				name={[
					"france-trip-23",
					"france-trip-26",
					"france-trip-27",
					"france-trip-28",
				]}
			>
				(Hi Nicole and Seb!)
			</Pic>{" "}
			met us for dinner in fabulous <Pic name="france-trip-25">Guethary</Pic>{" "}
			and we had a great (if insect-infested) meal.
		</p>
		<p>
			The next morning was Biarritz. It had what you might expect from a coastal
			French town: <Pic name="france-trip-30">pastries,</Pic>{" "}
			<Pic name="france-trip-29">surfboards and Acai bowls,</Pic>{" "}
			<Pic name="france-trip-31">a nice beach,</Pic> and a trail for{" "}
			<Pic name="france-trip-32">Robin to get lost on</Pic>. There was a cool
			promenade out to a{" "}
			<Pic name={["france-trip-33", "france-trip-35", "france-trip-39"]}>
				viewpoint
			</Pic>
			, even if sometimes we{" "}
			<Pic name={["france-trip-37", "france-trip-38"]}>
				didn't know what we were viewing
			</Pic>{" "}
			exactly. After some <Pic name="france-trip-42">climbing,</Pic>{" "}
			<Pic name="france-trip-44">posing,</Pic> and{" "}
			<Pic name="france-trip-47">exploring,</Pic> it was time for that most
			hallowed of traditions:{" "}
			<Pic name={["france-trip-48", "france-trip-49", "france-trip-50"]}>
				picnic and ice cream!
			</Pic>
		</p>
		<p>
			In the afternoon we went to see Robin's college roomate{" "}
			<Pic name="france-trip-51">(shout out to Willy C, Zeïna, and Mila!)</Pic>.
			They gave us the idea to take the <Pic name="france-trip-52">ferry</Pic>{" "}
			across the river to <Pic name="france-trip-55">Honarribia in Spain</Pic>.
			Apparently the way it's done there is to have one{" "}
			<Pic name="france-trip-56">one giant dinner</Pic> followed immediately by{" "}
			<Pic name="france-trip-58">another.</Pic> A{" "}
			<Pic name={["france-trip-62", "france-trip-61", "france-trip-60"]}>
				late ferry back
			</Pic>{" "}
			to our <Pic name="france-trip-64">canvas home</Pic> was the only thing
			left to do.
		</p>
		<p>
			Alas, we needed to leave the Atlantic coast, but not before a stop at the
			famous{" "}
			<Pic name={["france-trip-67", "france-trip-68", "france-trip-69"]}>
				St-Jean-de-Luz market
			</Pic>{" "}
			and a{" "}
			<Pic name={["france-trip-72", "france-trip-73", "france-trip-75"]}>
				cute mechanical train
			</Pic>{" "}
			that gave us a{" "}
			<Pic
				name={[
					"france-trip-77",
					"france-trip-78",
					"france-trip-79",
					"france-trip-80",
				]}
			>
				nice view
			</Pic>{" "}
			of our surroundings some time to{" "}
			<Pic
				name={[
					"france-trip-82",
					"france-trip-84",
					"france-trip-86",
					"france-trip-87",
				]}
			>
				pet horsies and build cairns
			</Pic>
			. We were headed to the <Pic name="france-trip-108">Pyrénées</Pic>. Our
			lodging was a{" "}
			<Pic
				name={[
					"france-trip-88",
					"france-trip-89",
					"france-trip-91",
					"france-trip-161",
				]}
			>
				super-cute gite
			</Pic>{" "}
			that served us a home-made dinner as well as a local{" "}
			<Pic name="france-trip-90">local cheese course</Pic>.
		</p>
		<p>
			The only full day in the mountains was devoted to a{" "}
			<Pic name="france-trip-97">hike to Lac D'Estom</Pic>. We'll let the
			pictures{" "}
			<Pic
				name={[
					"france-trip-99",
					"france-trip-100",
					"france-trip-102",
					"france-trip-103",
					"france-trip-104",
					"france-trip-105",
					"france-trip-106",
					"france-trip-107",
					"france-trip-110",
					"france-trip-116",
					"france-trip-117",
					"france-trip-119",
					"france-trip-121",
					"france-trip-122",
					"france-trip-123",
					"france-trip-125",
					"france-trip-126",
					"france-trip-127",
					"france-trip-128",
					"france-trip-132",
					"france-trip-133",
					"france-trip-134",
					"france-trip-141",
					"france-trip-143",
					"france-trip-147",
					"france-trip-149",
					"france-trip-150",
					"france-trip-152",
				]}
			>
				speak for themselves
			</Pic>
			. It was hot, so we found{" "}
			<Pic name="france-vid-01">creative ways to stay cool</Pic>. In true French
			fashion, the <em>refuge</em> at the lake served impeccable{" "}
			<Pic name={["france-trip-144", "france-trip-146", "france-trip-145"]}>
				wild blueberry tarts and brownies
			</Pic>
			. After a quick stop for <Pic name="france-trip-155">saucisson</Pic> and{" "}
			<Pic name="france-trip-156">cornichons</Pic>, we drove up a{" "}
			<Pic name="france-trip-157">steep hill</Pic> to a{" "}
			<Pic name={["france-trip-158", "france-trip-159"]}>
				cute restaurant for dinner
			</Pic>
			.
		</p>
		<p>
			Unfortunately, our time in the mountains came to an end. The upside of the
			long <Pic name="france-trip-178">drive</Pic> to Carcassonne the next day
			was a stop at an animal farm, which featured{" "}
			<Pic name={["france-trip-167", "france-trip-169"]}>goats</Pic>,{" "}
			<Pic name="france-trip-171">rabbits</Pic>, and{" "}
			<Pic name={["france-trip-172", "france-trip-173"]}>guinea pigs</Pic>.
			Robin did some research and found a really cool goat cheese farm{" "}
			<Pic name={["france-trip-177"]}>WAY off the beaten path</Pic>. The only
			problem was that it was not a cheese making facility at all, but rather a{" "}
			<Pic name="france-trip-179">barn full of goats</Pic>. Was the 40 minute
			detour worth it?
		</p>
		<p>
			Carcassonne was next, as a stopover between the Basque country and
			Provence. What do we remember about Carcassonne? Let's see:{" "}
			<Pic name={["france-trip-182", "france-trip-183"]}>narrow sidewalks</Pic>,
			medieval <Pic name="france-trip-184">towers</Pic> and{" "}
			<Pic name="france-trip-185">streets</Pic>, and{" "}
			<Pic name="france-trip-186">churches</Pic> where you{" "}
			<Pic name="france-trip-187">pray</Pic> for your parents to be done looking
			at churches. <Pic name="france-trip-189">Defensible gates</Pic> and{" "}
			<Pic name="france-trip-190">ramparts</Pic>.{" "}
			<Pic name="france-trip-191">Dinner</Pic> on pedestrian streets.{" "}
			<Pic name="france-trip-193">A morning run</Pic>, then{" "}
			<Pic name="france-trip-196">breakfast outdoors</Pic>.{" "}
			<Pic name="france-trip-201">Eli, Eli, lama saba... et cetera.</Pic>{" "}
			<Pic name="france-trip-199">Orangina?</Pic>
		</p>
		<p>
			Another long, hot day of driving was broken up with a{" "}
			<Pic name="france-trip-205">swimming</Pic> and{" "}
			<Pic name="france-trip-206">wildlife-gathering</Pic> stop on the{" "}
			<Pic name="france-trip-203">banks of the Gardon</Pic>. When we finally
			arrived at our Provence Airbnb, the most important thing to do was to get
			in the <Pic name="france-trip-209">above-ground pool</Pic> and cool off
			for the evening.
		</p>
		<p>
			We needed to be fresh for a big day in{" "}
			<Pic name="france-trip-210">Aix-en-Provence</Pic>! We had a lot on our
			list, including{" "}
			<Pic name={["france-trip-211", "france-trip-212", "france-trip-226"]}>
				the open-air market
			</Pic>
			, <Pic name="france-trip-225">narrow streets</Pic>, an{" "}
			<Pic name="france-trip-215">estate/museum</Pic> with a{" "}
			<Pic name="france-trip-216">Toulouse-Lautrec</Pic> exhibit, and a{" "}
			cathedral (for <Pic name="france-trip-229">praying</Pic> your parents were{" "}
			<Pic name="france-trip-214">done with museums</Pic>). We also encountered
			a strange photo booth that returned{" "}
			<Pic name={["france-trip-219", "france-trip-222"]}>AI-enhanced</Pic>{" "}
			photos of the kids, and of{" "}
			<Pic name="france-trip-220">Robin and... is that Diane??</Pic> That
			evening, D prepared a{" "}
			<Pic name="france-trip-231">fantastic French meal</Pic> with goodies from
			the market.
		</p>
		<p>
			We had planned to hike out to the Calanques the next day, but fire danger
			closed the trail. What a <Pic name="france-trip-234">shame</Pic>. We would
			need to <Pic name="france-trip-237">change plans</Pic> and{" "}
			<Pic name="france-trip-241">swim in the Mediterranean</Pic> instead. Maybe
			even do some <Pic name="france-trip-239">cliff jumping</Pic>. Perhaps a
			trip into{" "}
			<Pic name={["france-trip-243", "france-trip-244", "france-trip-247"]}>
				Cassis
			</Pic>
			.
		</p>
		<p>
			Having dealt with this extreme adversity in Provence, we were{" "}
			<Pic name="france-trip-253">ready</Pic> for the train ride to Paris. Well,{" "}
			<Pic name="france-trip-252">ready enough, anyway</Pic>. Here is Robin{" "}
			<Pic name="france-trip-251">pretending to understand</Pic> an SNCF
			employee. In spite of his best efforts to the contrary, we found the right
			plaform and managed to{" "}
			<Pic name={["france-trip-255", "france-trip-256", "france-trip-257"]}>
				get on the train
			</Pic>
			.
		</p>
	</>
);
