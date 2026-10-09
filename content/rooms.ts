export interface RoomType {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  capacity: string;
  bed: string;
  size: string;
  view: string;
  startingPrice: string;
  featured: boolean;
  amenities: string[];
  features: string[];
  image: string;
  gallery: string[];
}

export const rooms: RoomType[] = [
  {
    slug: "deluxe-valley-view-room",
    name: "Deluxe Valley View Room",
    tagline: "Panoramic Giri Valley vistas from your private sanctuary",
    shortDescription:
      "A serene, sunlight-drenched room designed for couples and solo travelers looking for peaceful mountain views and clean, comfortable hill hospitality.",
    longDescription:
      "Perched to capture the morning sunrise spilling across the Giri river basin, our Deluxe Valley View Room combines traditional Himalayan warmth with modern comforts. Wake up to crisp deodar breezes, sip freshly brewed mountain tea on your balcony, and unwind in unpretentious, restful comfort.",
    capacity: "{{TODO: 2 Adults + 1 Child}}",
    bed: "{{TODO: King Size Bed with premium mattress}}",
    size: "{{TODO: ~260 sq. ft.}}",
    view: "Direct Giri Valley, pine forest & sunrise mountain ridge view",
    startingPrice: "{{TODO: Contact directly for current tariff & special seasonal offers}}",
    featured: true,
    amenities: [
      "Private Valley-Facing Balcony",
      "24-Hour Hot & Cold Running Water",
      "High-Speed Wi-Fi Connectivity",
      "Flat Screen TV with Satellite Channels",
      "Electric Kettle with Tea & Coffee Setup",
      "Ensuite Bathroom with Modern Toiletries",
      "Intercom / Direct Room Service Support",
      "Comfortable Seating Area",
    ],
    features: [
      "Unobstructed panoramic mountain sunrise views",
      "Silent, forest-facing orientation for peaceful sleep",
      "Ample cross-ventilation with fresh Himalayan air",
    ],
    image: "/images/rooms/deluxe-valley-view.svg",
    gallery: [
      "/images/rooms/deluxe-valley-view.svg",
      "/images/rooms/room-balcony-view.svg",
      "/images/rooms/room-interior.svg",
    ],
  },
  {
    slug: "premium-balcony-suite",
    name: "Premium Balcony Suite",
    tagline: "Expansive living space with an elevated corner terrace",
    shortDescription:
      "Spacious corner suite boasting extended valley-facing vistas, a dedicated seating area, and seamless natural light for romantic weekends.",
    longDescription:
      "Designed for guests who value extra room to relax, read, or work remotely amidst the mountains. The Premium Balcony Suite offers a larger corner layout with uninterrupted 180-degree sightlines of the terraced peach orchards and surrounding Sirmour hills.",
    capacity: "{{TODO: 2 Adults + 2 Children or 3 Adults}}",
    bed: "{{TODO: King Size Bed + optional extra rollaway bedding}}",
    size: "{{TODO: ~340 sq. ft.}}",
    view: "180-degree panoramic terraced orchard & forested valley view",
    startingPrice: "{{TODO: Contact directly for current tariff & special seasonal offers}}",
    featured: true,
    amenities: [
      "Spacious Wrap-Around View Balcony",
      "Separate Living / Coffee Seating Lounge",
      "24-Hour Hot & Cold Running Water",
      "High-Speed Wi-Fi for Work-from-Hills",
      "Flat Screen LED TV",
      "Electric Kettle & Herbal Tea Selection",
      "Luxury Ensuite Bathroom with Vanity",
      "Wardrobe & Dedicated Luggage Storage",
    ],
    features: [
      "Corner vantage point with expansive sun exposure",
      "Generous private balcony for stargazing and evening tea",
      "Ideal for extended romantic weekend escapes",
    ],
    image: "/images/rooms/premium-balcony-suite.svg",
    gallery: [
      "/images/rooms/premium-balcony-suite.svg",
      "/images/rooms/room-balcony-view.svg",
      "/images/rooms/room-interior.svg",
    ],
  },
  {
    slug: "family-valley-suite",
    name: "Family Valley Suite",
    tagline: "Comfortable, interconnected layout for families and friend groups",
    shortDescription:
      "Generously proportioned accommodation curated specifically for families or small groups visiting Rajgarh together, offering togetherness with ample privacy.",
    longDescription:
      "Traveling with loved ones or a close circle of friends is best experienced when everyone shares the moment. Our Family Valley Suite provides generous living quarters, dual bedding configurations, and expansive windows that frame the majestic Sirmour valley.",
    capacity: "{{TODO: 4 Adults or 2 Adults + 2 Children}}",
    bed: "{{TODO: 2 Double / Queen Beds}}",
    size: "{{TODO: ~450 sq. ft.}}",
    view: "Broad Giri Valley, terraced farmland, and distant pine ridges",
    startingPrice: "{{TODO: Contact directly for current tariff & special seasonal offers}}",
    featured: true,
    amenities: [
      "Double Bedding Setup for Family Comfort",
      "Private Panoramic Valley Viewing Balcony",
      "Spacious Bathroom with 24-Hour Hot Water",
      "High-Speed Wi-Fi for Multiple Devices",
      "Large LED TV for Family Entertainment",
      "Electric Kettle with Tea & Coffee Amenities",
      "In-Room Dining Table & Seating Area",
      "Ample Wardrobe & Storage Space",
    ],
    features: [
      "Spacious layout tailored for family comfort and privacy",
      "Safe, child-friendly interior design and balcony railings",
      "Dedicated dining corner for relaxed family breakfasts",
    ],
    image: "/images/rooms/family-valley-suite.svg",
    gallery: [
      "/images/rooms/family-valley-suite.svg",
      "/images/rooms/room-interior.svg",
      "/images/rooms/room-balcony-view.svg",
    ],
  },
];
