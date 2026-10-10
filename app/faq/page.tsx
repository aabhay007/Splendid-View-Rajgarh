import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaqSchema } from "@/lib/seo/schema";
import { masterFaqList } from "@/content/faq";
import { businessDetails } from "@/content/business";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | Splendid View Eco Orchard Resort Rajgarh",
  description:
    "Find answers to common questions about Splendid View Eco Orchard Resort: cottage booking, road conditions, food, hot water, Wi-Fi, weather & check-in policies.",
  path: "/faq",
  keywords: [
    "Splendid View Eco Orchard Resort FAQ",
    "Rajgarh eco resort queries",
    "Himachal road conditions Rajgarh",
    "Rajgarh weather best time to visit",
  ],
});

export default function FaqPage() {
  const bookingFaqs = masterFaqList.filter((f) => f.category === "Booking & Stay");
  const reachFaqs = masterFaqList.filter((f) => f.category === "Location & Reach");
  const amenitiesFaqs = masterFaqList.filter(
    (f) => f.category === "Food & Amenities"
  );
  const weatherFaqs = masterFaqList.filter(
    (f) => f.category === "Weather & Seasons"
  );

  return (
    <>
      <JsonLd data={getFaqSchema(masterFaqList)} />

      <div className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "FAQs", href: "/faq" }]} />

          {/* Heading */}
          <div className="max-w-3xl my-8 space-y-4">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Guest Assistance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
              Have questions about your upcoming trip to Rajgarh? Browse our
              most frequent guest inquiries below or reach out to our team
              directly.
            </p>
          </div>

          {/* Categorized FAQs */}
          <div className="space-y-12 mb-16">
            {/* 1. Booking & Stay */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-warm-200 pb-2">
                Booking & Check-in
              </h2>
              <FaqAccordion items={bookingFaqs} defaultOpenFirst={true} />
            </div>

            {/* 2. Location & Road Accessibility */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-warm-200 pb-2">
                Location & Road Conditions
              </h2>
              <FaqAccordion items={reachFaqs} />
            </div>

            {/* 3. Food, Wi-Fi & Amenities */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-warm-200 pb-2">
                Dining & Amenities
              </h2>
              <FaqAccordion items={amenitiesFaqs} />
            </div>

            {/* 4. Weather & Seasons */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-warm-200 pb-2">
                Weather & Seasons
              </h2>
              <FaqAccordion items={weatherFaqs} />
            </div>
          </div>

          {/* Still Have Questions Box */}
          <div className="bg-white rounded-3xl p-8 border border-warm-200/90 shadow-sm text-center space-y-4 mb-16">
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Still Have a Specific Question?
            </h3>
            <p className="text-sm text-warm-700 max-w-md mx-auto">
              Our hosts are always delighted to assist you with local road
              advice, room selections, and personalized arrangements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${businessDetails.phones[0]}`}
                className="inline-flex items-center gap-2 bg-forest-900 text-white font-medium text-xs py-3 px-5 rounded-xl hover:bg-forest-800 transition-colors shadow"
              >
                <PhoneIcon className="w-4 h-4 text-emerald-300" />
                <span>Call {businessDetails.displayPhones[0]}</span>
              </a>
              <a
                href={businessDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium text-xs py-3 px-5 rounded-xl hover:bg-[#20bd5a] transition-colors shadow"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          <CtaBanner
            heading="Ready to Book Your Himalayan Retreat?"
            subheading="Experience the peace and quiet of the Giri valley at Splendid View Rajgarh."
          />
        </div>
      </div>
    </>
  );
}
