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
    slug: "valley-view-cottage",
    name: "Valley View Cottage",
    tagline: "Private standalone hillside cottage with panoramic Giri Valley vistas & balcony",
    shortDescription:
      "Perched gracefully amidst peach orchards, our independent valley-facing cottages feature warm wooden interiors, private sit-out balconies, modern ensuite bathrooms, and 180° Himalayan views.",
    longDescription:
      "Surrounded by pine-clad slopes and terraced peach orchards in Village Tikkari Tali, each independent hillside cottage at Splendid View is designed for pure tranquility and privacy. Wake up to golden sunrise rays spilling across the Giri river basin, breathe crisp Himalayan air on your private balcony, and unwind in warm wooden comfort equipped with modern amenities. Perfect for couples, families, and group travelers alike.",
    capacity: "2–3 Guests per cottage (6 cottages available for groups)",
    bed: "King / Queen Size Bed with comfortable mountain bedding",
    size: "~320 sq. ft. standalone cottage with ensuite bath & balcony",
    view: "Valley View",
    startingPrice: "Contact directly for current tariff & seasonal offers",
    featured: true,
    amenities: [
      "Private Valley-Facing Balcony",
      "24-Hour Hot & Cold Running Water",
      "High-Speed Wi-Fi Connectivity",
      "Flat Screen TV with Satellite Channels",
      "Electric Kettle with Tea & Coffee Setup",
      "Ensuite Modern Bathroom with Toiletries",
      "Comfortable Seating Area & Work Desk",
      "Intercom / Direct Room Service Support",
    ],
    features: [
      "Independent standalone cottage layout ensuring peaceful privacy",
      "Unobstructed 180° panoramic sunrise views over Giri Valley",
      "Private sit-out balcony with comfortable outdoor seating",
      "High wooden ceiling with cozy mountain cottage aesthetic",
      "Surrounded by peach & apple orchards and fresh Himalayan air",
    ],
    image: "/resort-images/rooms/cottage-bedroom-panoramic-view.webp",
    gallery: [
      "/resort-images/rooms/cottage-bedroom-master-bed.webp",
      "/resort-images/rooms/cottage-bedroom-panoramic-view.webp",
      "/resort-images/views/Sunrise-view.jpeg",
      "/resort-images/views/Morning-view.jpeg",
      "/resort-images/rooms/cottage-bedroom-side-angle.webp",
      "/resort-images/rooms/cottage-room-bed-closeup.webp",
      "/resort-images/home/two-cottages-balconies-sitout.jpeg",
      "/resort-images/home/six-standalone-cottages-row.jpeg",
    ],
  },
  {
    slug: "valley-view-kitchen-cottage",
    name: "Valley View Kitchen Cottage",
    tagline: "Spacious independent hillside cottage with private kitchenette, mountain vistas & balcony",
    shortDescription:
      "Ideal for families, extended stays, and workations, our Valley View Kitchen Cottage features an equipped private kitchenette, warm wooden interiors, attached modern bathroom, and expansive Giri Valley views.",
    longDescription:
      "Designed for guests who enjoy the flexibility of home-style living amidst the tranquility of the Himalayas, the Valley View Kitchen Cottage at Splendid View offers a private kitchenette alongside spacious wooden interiors and a panoramic balcony. Nestled within our 6-acre fruit orchard at 7,000 ft, prepare light meals, morning brews, or baby food at your convenience while soaking in mesmerizing views of the Giri River basin and surrounding pine forests.",
    capacity: "2–4 Guests (Spacious layout with kitchenette)",
    bed: "King Size Bed + Extra Mountain Bedding on request",
    size: "~380 sq. ft. standalone cottage with kitchenette, bath & balcony",
    view: "Valley View & Orchard View",
    startingPrice: "Contact directly for current tariff & seasonal packages",
    featured: true,
    amenities: [
      "Equipped Private Kitchenette",
      "Induction Cooktop / Electric Stove",
      "Tea & Coffee Setup & Electric Kettle",
      "Refrigerator & Basic Cookware / Dinnerware",
      "Private Valley-Facing Sit-Out Balcony",
      "24-Hour Hot & Cold Running Water",
      "High-Speed Wi-Fi Connectivity",
      "Ensuite Modern Bathroom with Toiletries",
    ],
    features: [
      "Dedicated kitchenette for self-cooking, baby food, or extended stays",
      "Panoramic 180° sunrise and valley vistas from private balcony",
      "Comfortable dining and seating space with work desk",
      "Peaceful standalone cottage setting with zero noise",
      "Surrounded by lush apple, peach, and apricot orchards",
    ],
    image: "/resort-images/rooms/cottage-bedroom-interior-wide.webp",
    gallery: [
      "/resort-images/rooms/cottage-bedroom-interior-wide.webp",
      "/resort-images/restarunt/teakwood-dining-table-setting.jpeg",
      "/resort-images/views/Sunrise-view.jpeg",
      "/resort-images/views/Morning-view.jpeg",
      "/resort-images/home/cottage-private-balcony-view.jpeg",
      "/resort-images/home/two-cottages-balconies-sitout.jpeg",
      "/resort-images/rooms/cottage-bedroom-master-bed.webp",
    ],
  },
];

