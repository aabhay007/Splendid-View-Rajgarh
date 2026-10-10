import { businessDetails } from "@/content/business";
import { RoomType } from "@/content/rooms";
import { BlogPost } from "@/content/blog";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://splendidviewrajgarh.com";

/**
 * Validated Schema.org JSON-LD Builders
 * STRICT COMPLIANCE: No invented reviews or aggregate ratings.
 */

export function getResortSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Resort",
    "@id": `${SITE_URL}/#resort`,
    name: businessDetails.name,
    description: businessDetails.description,
    url: SITE_URL,
    telephone: businessDetails.phones,
    priceRange: businessDetails.pricing.priceRangePlaceholder,
    image: [
      `${SITE_URL}/resort-images/home/resort-peach-orchards-drone-aerial-view.webp`,
      `${SITE_URL}/resort-images/rooms/cottage-bedroom-master-bed.webp`,
      `${SITE_URL}/resort-images/gallery/guests-forest-hiking-trail.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessDetails.address.village}, ${businessDetails.address.po}`,
      addressLocality: businessDetails.address.tehsil,
      addressRegion: businessDetails.address.state,
      postalCode: businessDetails.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessDetails.geo.latitude,
      longitude: businessDetails.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    checkinTime: businessDetails.hours.checkIn,
    checkoutTime: businessDetails.hours.checkOut,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Valley View Balcony",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Homestyle Mountain Dining",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free On-Site Parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Evening Bonfire on Request",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24-Hour Hot Water",
        value: true,
      },
    ],
    sameAs: [
      businessDetails.socialLinks.facebook,
      businessDetails.socialLinks.instagram,
      businessDetails.socialLinks.youtube,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: businessDetails.name,
    description: businessDetails.tagline,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: businessDetails.name,
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.jpg`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: businessDetails.phones[0],
          contactType: "reservations",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    inLanguage: "en-IN",
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${SITE_URL}${item.item}`,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getHotelRoomSchema(room: RoomType) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.shortDescription,
    occupancy: {
      "@type": "QuantitativeValue",
      name: room.capacity,
    },
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bed,
    },
    amenityFeature: room.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    partOfAccommodation: {
      "@type": "Resort",
      name: businessDetails.name,
      url: SITE_URL,
    },
  };
}

export function getArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: `${post.publishedAt}T00:00:00+05:30`,
    dateModified: `${post.publishedAt}T00:00:00+05:30`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: businessDetails.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}
