import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { businessDetails } from "@/content/business";

export const metadata = constructMetadata({
  title: "Privacy Policy | Splendid View Rajgarh",
  description:
    "Privacy Policy for Splendid View Rajgarh. Learn how we handle guest inquiries, personal details, and website cookies transparently.",
  path: "/privacy-policy",
  noIndex: true, // Typically standard for legal pages to prioritize indexing of core content
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Legal & Trust
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950">
            Privacy Policy
          </h1>
          <p className="text-sm text-warm-600">
            Last Updated: January 2025 • Splendid View Rajgarh
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-sm space-y-8 text-warm-800 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              1. Introduction
            </h2>
            <p>
              Splendid View Rajgarh (&quot;we&quot;, &quot;our&quot;, or &quot;the property&quot;) operates
              the website located at splendidviewrajgarh.com. This website exists
              exclusively for digital presence, room showcase, and direct guest
              communication. We do not operate an online payment engine, user
              account database, or store payment card details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              2. Information We Collect
            </h2>
            <p>
              When you voluntarily reach out via our website enquiry form,
              direct telephone call, or WhatsApp, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-warm-700">
              <li>Your name and contact phone number.</li>
              <li>Your preferred travel dates, guest count, and room preference.</li>
              <li>Any special dietary notes or travel inquiries you submit.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              3. How We Use Your Information
            </h2>
            <p>
              Your contact details are used strictly to communicate room
              availability, provide seasonal tariffs, assist with driving
              directions, and coordinate your stay. We never sell, rent, or trade
              guest contact details to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              4. Analytics & Cookies
            </h2>
            <p>
              We may utilize Google Analytics 4 (GA4) to understand aggregate,
              non-personally identifiable traffic patterns (such as page views,
              referral sources, and device types) to optimize website performance
              and user experience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding our privacy practices, please
              contact us directly at:
            </p>
            <address className="not-italic text-sm text-forest-950 font-medium">
              {businessDetails.name}
              <br />
              {businessDetails.address.fullFormatted}
              <br />
              Phone: {businessDetails.displayPhones[0]}
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
