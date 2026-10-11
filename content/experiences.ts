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
    title: "The Orchard Walk",
    tagline: "Wander through the Himalayan fruit orchards",
    category: "Nature",
    approxDistance: "{{TODO: On-site and within 1-5 km}}",
    duration: "2 to 3 hours",
    description:
      "Take a peaceful walk through our lush orchards of apples, plums, khurmani (apricots), and peaches. Located in Rajgarh, famously known as the Peach Bowl of Asia, the trail lets you experience the charm of Himalayan fruit farming, seasonal blossoms, and fresh mountain air—a refreshing escape into nature.",
    highlights: [
      "Stunning pink floral canopy during spring blossom season",
      "Opportunity to see traditional organic fruit farming",
      "Gentle, family-friendly walks amidst terraced mountain slopes",
    ],
    tips: "Visit between late March and April for blossoms, or June to July for fresh fruit harvest.",
    image: "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
  },
  {
    slug: "churdhar-peak-trekking",
    title: "Churdhar Trek – The Traditional Gabba Route",
    tagline: "Traditional ~22 km scenic trail to Shirgul Maharaj Temple & Churdhar Peak",
    category: "Adventure",
    approxDistance: "Traditional Gabba trail (~22 km)",
    duration: "Full-day trek / scenic hike",
    description:
      "Experience the traditional Gabba route to Churdhar Peak, featuring an approximately 22 km trek along a relatively level trail through beautiful forests, mountain landscapes, and peaceful Himalayan surroundings. A rewarding journey for nature lovers and trekking enthusiasts, the route leads towards the sacred Shirgul Maharaj Temple and the majestic Churdhar Peak.",
    highlights: [
      "Traditional relatively level ~22 km forest and mountain trail",
      "Passes through peaceful Himalayan surroundings and pine forests",
      "Leads towards sacred Shirgul Maharaj Temple & Churdhar Peak",
    ],
    tips: "Ensure proper trekking shoes and warm windproof layers. Check local weather before setting out.",
    image: "/resort-images/guide/churdhar-peak-shiva-sanctuary.jpeg",
  },
  {
    slug: "baru-sahib-gurudwara",
    title: "Baru Sahib Gurudwara",
    tagline: "Spiritual sanctuary & Valley of Divine Peace in Sirmaur",
    category: "Culture & Spiritual",
    approxDistance: "~25-30 km scenic drive from resort",
    duration: "Half-day visit (3-4 hours)",
    description:
      "Visit the serene Gurudwara Baru Sahib, nestled amidst the peaceful hills and lush green forests of Sirmaur, Himachal Pradesh. Known as the Valley of Divine Peace, this spiritual sanctuary offers a tranquil atmosphere for prayer, reflection, and inner peace. Surrounded by breathtaking mountain scenery, it is a beautiful destination to experience Sikh spirituality, serenity, and the warmth of Himalayan hospitality.",
    highlights: [
      "Tranquil spiritual atmosphere for prayer, meditation, and inner peace",
      "Revered as the Valley of Divine Peace surrounded by lush hills",
      "Experience sacred community Langar and warm Himalayan hospitality",
    ],
    tips: "Dress modestly and cover your head when entering the Gurudwara complex. Early mornings offer utmost peace.",
    image: "/resort-images/guide/baru-sahib-gurudwara-complex.jpeg",
  },
  {
    slug: "giri-river-valley",
    title: "Giri River Valley",
    tagline: "Scenic riverside beauty, fresh mountain air & clear waters",
    category: "Relaxation",
    approxDistance: "~12-15 km from resort near Giripul",
    duration: "2 to 3 hours",
    description:
      "Discover the scenic beauty of Giripul, a charming riverside destination near Rajgarh, where the Giri River flows through the picturesque hills of Himachal Pradesh. Enjoy peaceful riverside moments, lush green surroundings, fresh mountain air, and beautiful landscapes—a perfect stop for nature lovers, photography enthusiasts, and a relaxing escape into the outdoors.",
    highlights: [
      "Charming riverside destination along the flowing Giri River",
      "Lush green surroundings, clear waters, and picturesque hills",
      "Ideal for nature photography, picnics, and peaceful relaxation",
    ],
    tips: "Carry comfortable footwear with grip; remember to carry back all trash to keep the river pristine.",
    image: "/resort-images/guide/giri-river-valley-rapids.jpeg",
  },
  {
    slug: "habban-valley",
    title: "Habban Valley",
    tagline: "Dense deodar forests, green hills & authentic village life",
    category: "Nature",
    approxDistance: "~20-25 km scenic mountain drive",
    duration: "Half-day excursion (3-4 hours)",
    description:
      "Discover the tranquil beauty of Habban Valley, a hidden gem in Rajgarh, Himachal Pradesh surrounded by dense deodar forests, lush green hills, traditional villages, and breathtaking mountain views. Perfect for nature walks, scenic drives, and peaceful escapes, Habban offers a glimpse into authentic Himalayan life, far from the crowds and noise of city living.",
    highlights: [
      "Surrounded by dense deodar forests and rolling green hills",
      "Scenic mountain drives and tranquil forest walking trails",
      "Authentic Himalayan village culture far from city crowds",
    ],
    tips: "A wonderful afternoon scenic drive. Carry a light jacket as forested high-elevation zones can be breezy.",
    image: "/resort-images/guide/rajgarh-pine-valley-hamlet.jpeg",
  },
  {
    slug: "halonipul-river",
    title: "Halonipul River",
    tagline: "Refreshing mountain stream stop along the way to the resort",
    category: "Relaxation",
    approxDistance: "En route along the Solan-Rajgarh route",
    duration: "30 to 60 minutes",
    description:
      "Enjoy a refreshing stop at the small, scenic Halonipul River along the way to our resort. Surrounded by natural beauty and flowing mountain water, it’s a lovely spot for children and adults to dip their feet, play by the riverside, and enjoy peaceful moments in nature. A simple yet memorable experience for the whole family.",
    highlights: [
      "Refreshing natural stop with clean, flowing mountain water",
      "Lovely spot for children and adults to dip their feet and play",
      "Easy roadside access surrounded by pristine hillside beauty",
    ],
    tips: "A perfect rejuvenating break for families traveling to or from the resort.",
    image: "/resort-images/guide/himalayan-forest-stream-trail.jpeg",
  },
  {
    slug: "haripurdhar-maa-bhangayani-temple",
    title: "Haripurdhar Maa Bhangayani Temple",
    tagline: "Revered mountain shrine nestled high in the Sirmaur hills",
    category: "Culture & Spiritual",
    approxDistance: "~55-60 km scenic mountain drive",
    duration: "Half-day to full-day excursion",
    description:
      "Discover the spiritual charm of Haripurdhar, home to the revered Maa Bhangayani Temple, nestled in the beautiful hills of Sirmaur, Himachal Pradesh. Surrounded by scenic mountain landscapes and fresh Himalayan air, the temple offers a peaceful atmosphere for prayer, devotion, and cultural exploration—a meaningful spiritual getaway during your stay at Splendid View Eco Orchard Resort.",
    highlights: [
      "Revered ancient temple of Maa Bhangayani atop scenic ridges",
      "Breathtaking panoramic mountain views and crisp Himalayan air",
      "Meaningful spiritual atmosphere for prayer and cultural exploration",
    ],
    tips: "Dress modestly for temple visits. The scenic drive offers stunning viewpoints across District Sirmaur.",
    image: "/resort-images/guide/shirgul-maharaj-wooden-temple.jpeg",
  },
];
