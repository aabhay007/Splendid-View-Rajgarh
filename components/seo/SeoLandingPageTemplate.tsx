import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LandingPageData } from "@/content/landing-pages";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaqSchema } from "@/lib/seo/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { businessDetails } from "@/content/business";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";

interface SeoLandingPageTemplateProps {
  data: LandingPageData;
  heroImage?: string;
}

export function SeoLandingPageTemplate({
  data,
  heroImage = "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
}: SeoLandingPageTemplateProps) {
  const primaryPhone = businessDetails.phones[0];

  return (
    <>
      {/* FAQPage Schema.org structured data */}
      <JsonLd data={getFaqSchema(data.faqs)} />

      <div className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs
            items={[{ name: data.badge || "Guide", href: `/${data.slug}` }]}
          />

          {/* Page Hero Header */}
          <header className="my-8 sm:my-12 space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-peach-100 text-peach-800 text-xs font-bold uppercase tracking-widest border border-peach-200">
              {data.badge}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-forest-950 leading-[1.15]">
              {data.h1}
            </h1>

            <p className="text-base sm:text-xl text-warm-700 leading-relaxed font-sans max-w-3xl">
              {data.heroSubtitle}
            </p>

            {/* Quick Conversion CTA Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-medium text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all"
              >
                <PhoneIcon className="w-4 h-4 text-emerald-300" />
                <span>Call: {businessDetails.displayPhones[0]}</span>
              </a>

              <a
                href={businessDetails.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs sm:text-sm py-3 px-5 rounded-xl shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-medium text-xs sm:text-sm py-3 px-5 rounded-xl transition-all shadow-sm"
              >
                <span>View Rooms & Suites</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </header>

          {/* Visual Mountain Feature Image */}
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-lg bg-warm-200 mb-12">
            <Image
              src={heroImage}
              alt={`${data.primaryKeyword} at Splendid View Rajgarh, Himachal Pradesh`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Editorial Narrative Intro (500+ Words Structure) */}
          <section className="space-y-6 text-warm-900 text-base sm:text-lg leading-relaxed mb-12 border-b border-warm-200 pb-10">
            {data.intro.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-warm-800">
                {paragraph}
              </p>
            ))}
          </section>

          {/* In-Depth Sections with Tables and Bullets */}
          <div className="space-y-12 mb-16">
            {data.sections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  {section.title}
                </h2>

                {section.content.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg text-warm-800 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}

                {/* Optional Structured Table */}
                {section.table && (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-warm-300/80 bg-beige-50 shadow-sm">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-forest-900 text-white font-serif">
                          {section.table.headers.map((h, hIdx) => (
                            <th
                              key={hIdx}
                              className="py-3.5 px-4 font-semibold border-b border-forest-800"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-warm-100 text-warm-800">
                        {section.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={
                              rIdx % 2 === 0 ? "bg-beige-50" : "bg-beige-100/70"
                            }
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="py-3 px-4 leading-relaxed font-sans"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Optional Highlight Bullet Points */}
                {section.bulletPoints && (
                  <div className="bg-beige-50 p-6 sm:p-8 rounded-2xl border border-warm-300/80 shadow-sm space-y-3 my-4">
                    <h3 className="font-serif text-lg font-bold text-forest-950">
                      Key Highlights & Takeaways:
                    </h3>
                    <ul className="space-y-2.5">
                      {section.bulletPoints.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base text-warm-800"
                        >
                          <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Section: Frequently Asked Questions (FAQPage Schema backed) */}
          <section className="mb-16 space-y-6">
            <div className="border-b border-warm-200 pb-3">
              <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
                Common Inquiries
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mt-1">
                Frequently Asked Questions About {data.primaryKeyword}
              </h2>
            </div>

            <FaqAccordion items={data.faqs} defaultOpenFirst={true} />
          </section>

          {/* Contextual Internal Linking Block */}
          <section className="bg-warm-100/70 rounded-3xl p-8 border border-warm-200/90 mb-16 space-y-4">
            <h3 className="font-serif text-xl font-bold text-forest-950">
              Related Travel Guides & Accommodation
            </h3>
            <p className="text-xs text-warm-600">
              Continue planning your trip to Rajgarh and District Sirmour:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {data.relatedLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 bg-beige-50 text-forest-950 hover:bg-forest-900 hover:text-white font-medium text-xs py-2 px-3.5 rounded-xl border border-warm-300/80 transition-colors shadow-2xs"
                >
                  <span>{link.label}</span>
                  <ArrowRightIcon className="w-3 h-3 text-warm-400" />
                </Link>
              ))}
            </div>
          </section>

          {/* Tailored Conversion Banner */}
          <CtaBanner
            heading={data.cta.heading}
            subheading={data.cta.subheading}
          />
        </div>
      </div>
    </>
  );
}
