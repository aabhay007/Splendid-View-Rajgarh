export interface RouteGuide {
  origin: string;
  distance: string;
  travelTime: string;
  recommendedRoute: string;
  roadCondition: string;
  keyWaypoints: string[];
  directions: string[];
  tips: string[];
}

export const travelRoutes: RouteGuide[] = [
  {
    origin: "Delhi & NCR (Gurugram / Noida / Faridabad)",
    distance: "{{TODO: ~330 to 360 km depending on starting point}}",
    travelTime: "6.5 to 7.5 hours (comfortable drive with breaks)",
    recommendedRoute:
      "Delhi -> Panipat -> Ambala Cantt -> Zirakpur / Himalayan Expressway bypass -> Kalka -> Dharampur -> Kumarhatti (Take Solan-Rajgarh State Highway) -> Giri Pul -> Rajgarh -> Village Tikkari Tali",
    roadCondition:
      "Smooth 6-lane NH44 up to Ambala; 4-lane Himalayan Expressway up to Kumarhatti; well-paved, scenic two-lane hill highway from Kumarhatti via Giri Pul to Rajgarh.",
    keyWaypoints: [
      "Murthal / Karnal (Ideal for breakfast & fuel)",
      "Zirakpur / Pinjore bypass (Smooth four-lane expressway)",
      "Kumarhatti bypass junction (Turn right towards Rajgarh / Giri Pul)",
      "Giri Pul (Scenic river crossing)",
      "Rajgarh main town -> Village Tikkari Tali",
    ],
    directions: [
      "Head north out of Delhi on NH44 toward Panipat and Ambala.",
      "At Ambala, continue straight toward Zirakpur / Chandigarh bypass.",
      "Take the Himalayan Expressway ascending into Himachal Pradesh toward Kalka and Dharampur.",
      "At Kumarhatti (just before Solan town), turn right toward the Kumarhatti-Sultanpur-Rajgarh road.",
      "Cross the Giri River bridge (Giri Pul) and ascend along the pine-lined road toward Rajgarh.",
      "As you reach the Rajgarh area, follow directions to Village Tikkari Tali (Jola) / Dahan to arrive at Splendid View.",
    ],
    tips: [
      "Start early morning (5:00 AM - 6:00 AM) to bypass Delhi and Panipat peak traffic effortlessly.",
      "Fill fuel at reliable highway pumps around Karnal or Dharampur.",
      "Save our Google Map directions link offline before ascending into winding hill roads.",
    ],
  },
  {
    origin: "Chandigarh, Panchkula & Mohali (Tri-City)",
    distance: "{{TODO: ~105 to 120 km}}",
    travelTime: "2.5 to 3.5 hours",
    recommendedRoute:
      "Chandigarh / Panchkula -> Himalayan Expressway -> Pinjore -> Kalka -> Kumarhatti -> Sultanpur -> Giri Pul -> Rajgarh -> Village Tikkari Tali",
    roadCondition:
      "Four-lane expressway up to Kumarhatti bypass; smooth, less congested mountain road from Kumarhatti down to Giri Pul and up to Rajgarh.",
    keyWaypoints: [
      "Panchkula / Pinjore toll gate",
      "Dharampur (Famous for mountain snacks)",
      "Kumarhatti diversion point",
      "Giri Pul river valley",
      "Rajgarh -> Village Tikkari Tali",
    ],
    directions: [
      "Depart from Chandigarh/Panchkula via Old Panchkula onto the Himalayan Expressway.",
      "Climb comfortably past Parwanoo and Dharampur.",
      "At Kumarhatti bypass, follow the signpost towards Rajgarh (avoiding Solan town traffic).",
      "Drive down toward Giri Pul crossing the picturesque river basin.",
      "Climb the gentle curves up to Rajgarh and continue to Village Tikkari Tali.",
    ],
    tips: [
      "Perfect spontaneous weekend or day getaway distance from Tri-City.",
      "The Kumarhatti to Rajgarh stretch is peaceful and significantly less crowded than the main Shimla highway.",
    ],
  },
  {
    origin: "Shimla & Kufri",
    distance: "{{TODO: ~70 to 80 km}}",
    travelTime: "2.0 to 2.5 hours",
    recommendedRoute:
      "Shimla -> Kandaghat -> Solan -> Yashwant Nagar / Giri Pul -> Rajgarh OR via Chhaila / Giri valley route",
    roadCondition:
      "Scenic hill road passing through apple and peach belts with dramatic mountain backdrops.",
    keyWaypoints: [
      "Kandaghat junction",
      "Solan bypass / Yashwant Nagar",
      "Giri river bridge",
      "Rajgarh town -> Village Tikkari Tali",
    ],
    directions: [
      "Drive south from Shimla toward Kandaghat and Solan bypass.",
      "Take the state road linking Solan to Rajgarh via Yashwant Nagar / Giri river.",
      "Ascend towards Rajgarh town and proceed to Village Tikkari Tali.",
    ],
    tips: [
      "Rajgarh is the tranquil mountain counterpart to Shimla—cooler, peaceful, uncommercialized.",
      "The scenic Chhaila / Giri valley route is especially breathtaking in fruit blossom and autumn seasons.",
    ],
  },
];

export const publicTransitGuides = {
  railway: {
    nearestBroadGauge: "Kalka Railway Station (KLK) — approx. 85 km away",
    details:
      "Kalka is connected via daily express and Shatabdi trains from New Delhi. Taxis are readily available at Kalka station to drive directly to Rajgarh.",
    toyTrainOption:
      "You can also board the UNESCO World Heritage Kalka-Shimla Toy Train up to Solan / Kumarhatti, and hire a cab from there to Rajgarh.",
  },
  air: {
    nearestAirport: "Chandigarh International Airport (IXC) — approx. 115 km away",
    details:
      "Chandigarh Airport operates direct flights from Delhi, Mumbai, Bengaluru, Hyderabad, and other metro cities. Direct cabs to Rajgarh take approximately 3.5 hours.",
    shimlaAirport:
      "Shimla Airport (Jubbarhatti - SLV) is approx. 75 km away with regional connections.",
  },
};
