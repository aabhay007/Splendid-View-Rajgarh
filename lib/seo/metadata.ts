import type { Metadata } from "next";
import { businessDetails } from "@/content/business";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://splendidviewrajgarh.com";

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

/**
 * Technical SEO Metadata Generator for Next.js App Router
 * Enforces canonicals, Open Graph, Twitter cards, and regional geo meta tags.
 */
export function constructMetadata({
  title,
  description,
  path,
  keywords,
  ogType = "website",
  image = "/images/og-default.png",
  noIndex = false,
}: MetadataParams): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    "Splendid View Rajgarh",
    "Resort in Rajgarh",
    "Hotel in Rajgarh",
    "Rajgarh Sirmour",
    "Himachal Pradesh stay",
    "Peach Valley Rajgarh",
    "Weekend getaway from Chandigarh",
    "Weekend getaway from Delhi",
  ];

  return {
    title: {
      default: title,
      template: "%s | Splendid View Rajgarh",
    },
    description,
    keywords: keywords ? [...keywords, ...defaultKeywords] : defaultKeywords,
    authors: [{ name: businessDetails.name, url: SITE_URL }],
    creator: businessDetails.name,
    publisher: businessDetails.name,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: businessDetails.name,
      locale: "en_IN",
      type: ogType,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Splendid View Rajgarh, Himachal Pradesh`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@splendidviewrajgarh",
    },
    other: {
      "geo.region": "IN-HP",
      "geo.placename": "Rajgarh, District Sirmour",
      "geo.position": `${businessDetails.geo.latitude};${businessDetails.geo.longitude}`,
      ICBM: `${businessDetails.geo.latitude}, ${businessDetails.geo.longitude}`,
    },
  };
}
