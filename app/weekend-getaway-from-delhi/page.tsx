import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["weekend-getaway-from-delhi"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function WeekendGetawayFromDelhiPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/images/blog/delhi-rajgarh-roadtrip.svg"
    />
  );
}
