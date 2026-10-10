import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["rajgarh-peach-valley"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function RajgarhPeachValleyPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/resort-images/home/resort-peach-orchards-drone-aerial-view.webp"
    />
  );
}
