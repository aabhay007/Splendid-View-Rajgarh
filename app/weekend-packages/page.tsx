import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { landingPages } from "@/content/landing-pages";
import { SeoLandingPageTemplate } from "@/components/seo/SeoLandingPageTemplate";

const pageData = landingPages["weekend-packages"];

export const metadata = constructMetadata({
  title: pageData.metaTitle,
  description: pageData.metaDescription,
  path: `/${pageData.slug}`,
  keywords: [pageData.primaryKeyword, ...pageData.secondaryKeywords],
});

export default function WeekendPackagesPage() {
  return (
    <SeoLandingPageTemplate
      data={pageData}
      heroImage="/resort-images/home/six-standalone-cottages-row.jpeg"
    />
  );
}
