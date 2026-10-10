import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["one-day-trip-near-rajgarh"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function OneDayTripNearRajgarhPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/resort-images/gallery/friends-pine-forest-nature-trek.webp"
    />
  );
}
