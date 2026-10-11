export interface GuestReview {
  id: string;
  author: string;
  location: string;
  tag: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  avatarInitial: string;
}

export const googleReviewsList: GuestReview[] = [
  {
    id: "review-1",
    author: "Rohit Sharma",
    location: "Family Trip from Delhi",
    tag: "Panoramic Valley View",
    rating: 5,
    date: "1 month ago",
    comment:
      "Splendid View is truly a hidden paradise! Perched in an orchard at 7,000 ft with panoramic valley views. The cottages are clean, cozy, and made of beautiful natural wood. Waking up to the sunrise over Giri valley with fresh mountain air was unforgettable. Delicious home-cooked Himachali food and the hosts treat you like family.",
    highlight: "Unmatched valley views & warm hosting",
    avatarInitial: "R",
  },
  {
    id: "review-2",
    author: "Priya & Amit Verma",
    location: "Couple Getaway from Chandigarh",
    tag: "Peaceful Peach Orchards",
    rating: 5,
    date: "2 months ago",
    comment:
      "The perfect weekend getaway from Chandigarh (just a 3.5 hour drive). Zero commercial noise, pure silence, and surrounded by peach and apple orchards. Sitting on the private balcony sipping tea while watching the sunset was mesmerizing. Direct booking with the owner was smooth and transparent.",
    highlight: "Peaceful escape just 3.5 hrs from Chandigarh",
    avatarInitial: "P",
  },
  {
    id: "review-3",
    author: "Col. Rajiv Bakshi",
    location: "Family Vacation, Gurugram",
    tag: "Standalone Swiss Cottages",
    rating: 5,
    date: "3 months ago",
    comment:
      "If you want to escape crowded hill stations like Shimla, Rajgarh is the place. Splendid View offers standalone Swiss cottages with 24/7 hot water, fast Wi-Fi, and total tranquility. The evening bonfire under starlit Himalayan skies was magical. Highly recommended for families seeking peaceful holidays.",
    highlight: "24/7 hot water, fast Wi-Fi & starlit bonfire",
    avatarInitial: "R",
  },
  {
    id: "review-4",
    author: "Dr. Neha Malhotra",
    location: "Workation & Wellness, Mohali",
    tag: "High-Speed Wi-Fi & Workation",
    rating: 5,
    date: "3 months ago",
    comment:
      "Spent 4 days working remotely here. High-speed internet worked seamlessly, peaceful surroundings with zero distractions, and piping hot fresh food prepared to order. The 6-acre fruit orchard is wonderful for morning walks. Will definitely visit again!",
    highlight: "Seamless remote work in crisp mountain air",
    avatarInitial: "N",
  },
];
