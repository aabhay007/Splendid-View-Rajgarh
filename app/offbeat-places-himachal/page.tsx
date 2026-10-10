import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["offbeat-places-himachal"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function OffbeatPlacesHimachalPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/resort-images/guide/rajgarh-pine-valley-hamlet.jpeg"
    />
  );
}
