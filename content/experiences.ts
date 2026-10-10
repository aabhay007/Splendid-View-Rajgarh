export interface ExperienceItem {
  slug: string;
  title: string;
  tagline: string;
  category: "Nature" | "Adventure" | "Culture & Spiritual" | "Relaxation";
  approxDistance: string;
  duration: string;
  description: string;
  highlights: string[];
  tips: string;
  image: string;
}

export const experiencesList: ExperienceItem[] = [
  {
    slug: "rajgarh-peach-orchards",
    title: "Rajgarh Peach & Plum Orchards",
    tagline: "Wander through the famous 'Peach Bowl of Asia'",
    category: "Nature",
    approxDistance: "{{TODO: On-site and within 1-5 km}}",
    duration: "2 to 3 hours",
    description:
      "Rajgarh is renowned across India as the 'Peach Bowl of Asia'. In spring (March to April), the valley transforms into an ethereal canvas of pink and white peach blossoms. In early summer (May to July), the trees hang heavy with luscious ripe peaches, plums, and apricots. A walk through these terraced orchards offers a fragrant, peaceful immersion into authentic Himalayan agro-life.",
    highlights: [
      "Stunning pink floral canopy during spring blossom season",
      "Opportunity to see traditional organic fruit farming",
      "Gentle, family-friendly walks amidst terraced mountain slopes",
    ],
    tips: "Visit between late March and April for blossoms, or June to July for fresh fruit harvest.",
    image: "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
  },
  {
    slug: "giri-river-valley",
    title: "Giri River Riverside Leisure",
    tagline: "Pebbled riverbanks, clear waters, and tranquil picnics",
    category: "Relaxation",
    approxDistance: "{{TODO: ~12-15 km from resort near Giri Pul}}",
    duration: "Half-day excursion (3-4 hours)",
    description:
      "The Giri River winds gracefully through the valley beneath Rajgarh. Its crystal-clear mountain streams, smooth pebble banks, and gentle water murmurs create the perfect setting for an afternoon picnic, photography, or simply dipping your feet in cool mountain currents away from city noise.",
    highlights: [
      "Peaceful riverside relaxation away from tourist crowds",
      "Ideal location for landscape photography and family picnics",
      "Scenic mountain drive descending from Rajgarh ridgeline",
    ],
    tips: "Carry comfortable footwear with grip; remember to carry back all trash to keep the river pristine.",
    image: "/resort-images/gallery/guests-forest-hiking-trail.webp",
  },
  {
    slug: "baru-sahib-valley-of-peace",
    title: "Baru Sahib Gurdwara (The Divine Valley)",
    tagline: "Spiritual sanctuary cradled in forested Himalayan mountains",
    category: "Culture & Spiritual",
    approxDistance: "{{TODO: ~25-30 km scenic drive}}",
    duration: "Half-day visit (4-5 hours)",
    description:
      "Baru Sahib, revered as the 'Valley of Divine Peace', is situated in a tranquil valley enclave bordered by thick pine forests. Home to the revered Gurdwara Baru Sahib and the Akal Academy campus, it is known throughout North India for its deep spiritual sanctity, community langar (kitchen), and serene, uplifting ambience.",
    highlights: [
      "Spiritual peace and harmonious natural surroundings",
      "Wholesome, sacred community Langar served to all visitors",
      "Picturesque mountain drive traversing scenic Sirmour passes",
    ],
    tips: "Dress modestly and cover your head when entering the Gurdwara complex. Early mornings offer utmost peace.",
    image: "/resort-images/guide/rajgarh-pine-valley-hamlet.jpeg",
  },
  {
    slug: "churdhar-peak-trekking",
    title: "Churdhar Peak & Churwadhar Nature Trails",
    tagline: "The highest peak of the outer Himalayas (3,647m)",
    category: "Adventure",
    approxDistance: "{{TODO: Base camps accessible within 25-45 km drive}}",
    duration: "Full-day trek / overnight expedition",
    description:
      "Churdhar Peak (Churchandni / Mountain of the Silver Bangle) is the crowning jewel of District Sirmour. Crowned by a dramatic Shiva temple and colossal lingam at 11,965 ft, the sanctuary is home to monal pheasants, musk deer, and ancient deodar forests. For casual walkers, shorter forest trails around Churwadhar offer breathtaking views without the intense alpine climb.",
    highlights: [
      "Panoramic 360-degree vistas across Gangetic plains and high snow peaks",
      "Rich wildlife sanctuary with cedar, pine, and rhododendron forests",
      "Ancient mountain temple of Shirgul Maharaj at the summit",
    ],
    tips: "Ensure proper trekking shoes and warm windproof layers. Check local weather before setting out.",
    image: "/resort-images/gallery/friends-pine-forest-nature-trek.webp",
  },
  {
    slug: "village-heritage-walk-tikkari-tali",
    title: "Village Heritage Walk in Tikkari Tali",
    tagline: "Experience slow-paced, genuine Himachali village life",
    category: "Nature",
    approxDistance: "Starts directly at resort doorstep",
    duration: "1 to 2 hours",
    description:
      "Take a peaceful, unhurried walk right from Splendid View into the traditional hamlets of Tikkari Tali and Jola. Observe traditional wooden and slate-roof Himachali architecture, terraced step-farming, friendly mountain livestock, and warm village elders who welcome travelers with genuine smiles.",
    highlights: [
      "Authentic cultural insight with zero commercialization",
      "Pure clean air scented by wildflowers and pine needles",
      "Zero vehicle traffic along winding stone walking trails",
    ],
    tips: "Best enjoyed in the golden hour just before sunset when soft light bathes the entire valley.",
    image: "/resort-images/gallery/guests-planting-trees-rajgarh.webp",
  },
  {
    slug: "himalayan-night-stargazing",
    title: "Pristine Himalayan Stargazing & Bonfire",
    tagline: "Clear dark skies and warm crackling fire unmarred by city smog",
    category: "Relaxation",
    approxDistance: "Resort lawn and private balconies",
    duration: "Evening onwards",
    description:
      "Far removed from the light domes of Delhi, Chandigarh, or even Shimla, nightfall over Rajgarh reveals a dazzling tapestry of stars. Gather around the open brick fire pit on crisp evenings, trace constellations arching across the valley, and enjoy deep mountain quiet.",
    highlights: [
      "Crystal clear mountain visibility with minimal light pollution",
      "Warm crackling wood fire on the stone terrace",
      "Pair with a warm cup of herbal tea from your balcony",
    ],
    tips: "Download an offline stargazing app (like Stellarium) to identify constellations right from the terrace.",
    image: "/resort-images/amenties/bonfire/evening-bonfire-pit-gathering.webp",
  },
];
