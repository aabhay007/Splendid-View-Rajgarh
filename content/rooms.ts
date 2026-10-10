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
    image: "/resort-images/rooms/cottage-bedroom-master-bed.webp",
    gallery: [
      "/resort-images/rooms/cottage-bedroom-master-bed.webp",
      "/resort-images/rooms/cottage-bedroom-panoramic-view.webp",
      "/resort-images/rooms/cottage-work-desk-and-wardrobe.webp",
      "/resort-images/rooms/cottage-bedroom-sloped-ceiling.webp",
      "/resort-images/rooms/cottage-bedroom-side-angle.webp",
      "/resort-images/rooms/cottage-room-bed-closeup.webp",
      "/resort-images/home/two-cottages-balconies-sitout.jpeg",
      "/resort-images/home/six-standalone-cottages-row.jpeg",
    ],
  },
];
