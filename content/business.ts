export interface BusinessContact {
  name: string;
  tagline: string;
  description: string;
  address: {
    village: string;
    po: string;
    tehsil: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phones: string[];
  displayPhones: string[];
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
    url: string;
  };
  email: string;
  geo: {
    latitude: number;
    longitude: number;
    elevation: string;
  };
  hours: {
    checkIn: string;
    checkOut: string;
    frontDesk: string;
  };
  pricing: {
    priceRangePlaceholder: string;
    currency: string;
  };
  googleMaps: {
    cidUrl: string;
    embedSrc: string;
    directionsUrl: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    tripadvisor?: string;
  };
}

export const businessDetails: BusinessContact = {
  name: "Splendid View Eco Orchard Resort",
  tagline: "Eco Orchard Resort & Cottages in Rajgarh, Himachal Pradesh",
  description:
    "Perched gracefully amidst the verdant pine slopes and lush peach orchards of Rajgarh in District Sirmour, Splendid View Eco Orchard Resort offers private valley-facing cottages, unmatched Giri valley vistas, pure Himalayan tranquility, and heartfelt mountain hospitality for couples, families, and nature lovers.",
  address: {
    village: "Village Tikkari Tali (Jola)",
    po: "P.O. Dahan",
    tehsil: "Tehsil Rajgarh",
    district: "District Sirmour",
    state: "Himachal Pradesh",
    postalCode: "173101",
    country: "India",
    fullFormatted:
      "Village Tikkari Tali (Jola), P.O. Dahan, Tehsil Rajgarh, District Sirmour, Himachal Pradesh 173101, India",
  },
  phones: ["+918219515083", "+919816291595"],
  displayPhones: ["+91 82195 15083", "+91 9816622493"],
  whatsapp: {
    number: "918219515083",
    displayNumber: "+91 82195 15083",
    defaultMessage:
      "Hello Splendid View Eco Orchard Resort! I am interested in planning a stay. Could you share cottage availability and tariff details?",
    url: "https://wa.me/918219515083?text=Hello%20Splendid%20View%20Eco%20Orchard%20Resort!%20I%20am%20interested%20in%20planning%20a%20stay.%20Could%20you%20share%20cottage%20availability%20and%20tariff%20details%3F",
  },
  email: "{{TODO: reservations@splendidviewrajgarh.com}}",
  geo: {
    // Exact lat/long placeholders to be updated by owner with GPS pin
    latitude: 30.852, // {{TODO: Latitude coordinate from Google Maps pin}}
    longitude: 77.301, // {{TODO: Longitude coordinate from Google Maps pin}}
    elevation: "{{TODO: ~2,100 meters above sea level}}",
  },
  hours: {
    checkIn: "12:00 PM",
    checkOut: "11:00 AM",
    frontDesk: "7:00 AM – 10:00 PM (IST)",
  },
  pricing: {
    priceRangePlaceholder: "{{TODO: ₹₹ - Contact directly for seasonal tariff & best rates}}",
    currency: "INR",
  },
  googleMaps: {
    cidUrl:
      "https://maps.google.com/?q=Splendid+View+Rajgarh+Village+Tikkari+Tali+Himachal+Pradesh",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13700!2d77.30!3d30.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDUxJzA3LjIiTiA3N8KwMTgnMDMuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
    directionsUrl:
      "https://www.google.com/maps/dir//Splendid+View+Rajgarh+Himachal+Pradesh+173101",
  },
  socialLinks: {
    facebook: "{{TODO: https://facebook.com/splendidviewrajgarh}}",
    instagram: "{{TODO: https://instagram.com/splendidviewrajgarh}}",
    youtube: "{{TODO: https://youtube.com/@splendidviewrajgarh}}",
  },
};
