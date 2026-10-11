export interface FAQItem {
  question: string;
  answer: string;
  category: "Booking & Stay" | "Location & Reach" | "Food & Amenities" | "Weather & Seasons";
}

export const masterFaqList: FAQItem[] = [
  {
    category: "Booking & Stay",
    question: "How do I book a stay at Splendid View Rajgarh?",
    answer:
      "We believe in personal hospitality and transparent communication. Simply call us directly at +91 8219515083 / +91 9816291595, send a WhatsApp message, or submit the website enquiry form. We will verify room availability and confirm your reservation directly without third-party commission markups.",
  },
  {
    category: "Booking & Stay",
    question: "What are the standard check-in and check-out timings?",
    answer:
      "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to room availability upon request at the time of reservation.",
  },
  {
    category: "Booking & Stay",
    question: "Do you require government ID proof at check-in?",
    answer:
      "Yes. In compliance with local tourism and safety regulations, all adult guests must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License) during check-in.",
  },
  {
    category: "Location & Reach",
    question: "Where is Splendid View Rajgarh situated?",
    answer:
      "We are located in Village Tikkari Tali (Jola), P.O. Dahan, Tehsil Rajgarh, District Sirmour, Himachal Pradesh (PIN: 173101). Our property commands elevated views of the panoramic valley view and surrounding pine-clad mountain ridges.",
  },
  {
    category: "Location & Reach",
    question: "How far is Splendid View Rajgarh from Delhi and Chandigarh?",
    answer:
      "From Chandigarh, it is an easy 3:30 to 4:00 hour drive (approx. 124 km) via the Himalayan Expressway and Kumarhatti bypass. From Delhi/NCR, it is a comfortable 7:30 to 8:00 hour journey (approx. 369 km) via NH44, making it one of the most accessible offbeat weekend getaways in Himachal.",
  },
  {
    category: "Location & Reach",
    question: "Is the road to Rajgarh suitable for small cars and sedans?",
    answer:
      "Yes. The entire highway up to Kumarhatti is a multi-lane expressway, and the state road from Kumarhatti down through Giri Pul to Rajgarh is well-tarred and regularly maintained. Hatchbacks, sedans, and SUVs can all reach our property comfortably.",
  },
  {
    category: "Location & Reach",
    question: "Is there safe on-site parking for vehicles?",
    answer:
      "Yes, we provide secure on-site parking for cars, SUVs, and two-wheelers visiting our property.",
  },
  {
    category: "Food & Amenities",
    question: "What dining options are available at the property?",
    answer:
      "We serve delicious homestyle North Indian and regional Himachali meals prepared fresh with locally sourced ingredients. Special dietary preferences (vegetarian, non-spicy meals for kids) can easily be accommodated upon advance notice.",
  },
  {
    category: "Food & Amenities",
    question: "Is high-speed Wi-Fi available for remote work?",
    answer:
      "Yes, we provide reliable Wi-Fi connectivity across guest rooms and common areas, making Splendid View suitable for remote workations and digital nomad getaways amidst nature.",
  },
  {
    category: "Food & Amenities",
    question: "Is there continuous hot water in the bathrooms?",
    answer:
      "Yes, all our en-suite bathrooms feature 24-hour hot and cold running water so you can enjoy relaxing warm showers in any season.",
  },
  {
    category: "Food & Amenities",
    question: "Can you arrange an evening bonfire?",
    answer:
      "Yes! Weather permitting, we can arrange a warm outdoor bonfire in our open garden terrace for an unforgettable evening under the Himalayan stars (available upon advance request).",
  },
  {
    category: "Weather & Seasons",
    question: "When is the best time to visit Rajgarh?",
    answer:
      "Rajgarh is a year-round destination: Spring (March to April) brings spectacular peach blossoms; Summer (May to June) offers pleasant temperatures (20-28°C) to escape the plains' heat; Monsoon (July to August) turns the valley emerald green with fresh waterfalls; Autumn (September to November) provides crystal-clear mountain views and crisp air; Winter (December to February) brings invigorating chill and cozy evenings.",
  },
  {
    category: "Weather & Seasons",
    question: "Why is Rajgarh called the 'Peach Bowl of Asia'?",
    answer:
      "Rajgarh and the surrounding Giri valley in District Sirmour produce the largest commercial quantity of high-quality peaches, apricots, and plums in the region. In spring, thousands of acres of orchards bloom with delicate pink and white flowers, earning the valley this celebrated moniker.",
  },
];
