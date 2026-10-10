import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["summer-getaway-himachal"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function SummerGetawayHimachalPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/resort-images/gallery/guests-forest-hiking-trail.webp"
    />
  );
}
