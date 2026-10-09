export interface AmenityItem {
  id: string;
  title: string;
  category: "Property" | "Comfort" | "Experiences" | "Dining";
  description: string;
  icon: string;
  featured: boolean;
}

export const amenitiesList: AmenityItem[] = [
  {
    id: "valley-balconies",
    title: "Panoramic Valley-Facing Balconies",
    category: "Property",
    description:
      "Every vantage point frames the dramatic Giri valley and forested ridgelines. Step out anytime for fresh Himalayan pine air and tranquil mornings.",
    icon: "mountain",
    featured: true,
  },
  {
    id: "mountain-dining",
    title: "Homestyle Mountain Dining",
    category: "Dining",
    description:
      "Savor freshly prepared, wholesome North Indian delicacies and regional Himachali preparations cooked with seasonal local produce.",
    icon: "utensils",
    featured: true,
  },
  {
    id: "bonfire-stargazing",
    title: "Evening Bonfire & Star-Gazing",
    category: "Experiences",
    description:
      "Gather around a cozy crackling bonfire under pristine, light-pollution-free Himalayan skies on crisp mountain evenings (subject to weather & on request).",
    icon: "flame",
    featured: true,
  },
  {
    id: "mountain-lawn",
    title: "Open Mountain Lawn & Terrace",
    category: "Property",
    description:
      "A manicured open outdoor space overlooking the valley, ideal for morning yoga, gentle sunbathing, children's play, or quiet reading.",
    icon: "trees",
    featured: true,
  },
  {
    id: "high-speed-wifi",
    title: "High-Speed Wi-Fi Connectivity",
    category: "Comfort",
    description:
      "Stay connected with stable broadband suitable for remote work, video calls, or streaming while soaking in pristine nature.",
    icon: "wifi",
    featured: true,
  },
  {
    id: "secure-parking",
    title: "Safe On-Premises Parking",
    category: "Property",
    description:
      "Convenient and secure parking space on property for cars, SUVs, and motorcycles driving in from Delhi, Chandigarh, or Shimla.",
    icon: "car",
    featured: true,
  },
  {
    id: "hot-water",
    title: "24/7 Running Hot & Cold Water",
    category: "Comfort",
    description:
      "Continuous hot water supply in all en-suite bathrooms, ensuring warm showers after a day exploring mountain trails.",
    icon: "droplet",
    featured: true,
  },
  {
    id: "nature-trails",
    title: "Direct Access to Nature & Orchard Trails",
    category: "Experiences",
    description:
      "Step directly out into gentle village walking paths, terraced peach orchards, and secluded pine groves in and around Tikkari Tali.",
    icon: "footprints",
    featured: true,
  },
  {
    id: "power-backup",
    title: "Power Backup",
    category: "Comfort",
    description:
      "Equipped to maintain essential lighting and charging during seasonal mountain electrical grid fluctuations.",
    icon: "zap",
    featured: false,
  },
  {
    id: "daily-housekeeping",
    title: "Attentive Housekeeping & Room Care",
    category: "Comfort",
    description:
      "Thorough daily room cleaning, fresh mountain linens, and friendly, personalized assistance from local staff.",
    icon: "sparkles",
    featured: false,
  },
];
