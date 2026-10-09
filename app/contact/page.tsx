import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { getResortSchema } from "@/lib/seo/schema";
import { businessDetails } from "@/content/business";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  ClockIcon,
} from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Contact Us & Bookings | Splendid View Rajgarh",
  description:
    "Contact Splendid View Rajgarh directly for best room tariffs, availability & directions. Call +91 8219515083 or chat on WhatsApp. Village Tikkari Tali, Rajgarh.",
  path: "/contact",
  keywords: [
    "Contact Splendid View Rajgarh",
    "Splendid View Rajgarh phone number",
    "Rajgarh resort booking",
    "Splendid View Rajgarh address",
    "Direct booking Rajgarh stay",
  ],
});

export default function ContactPage() {
  return (
    <>
      {/* Schema.org LodgingBusiness / Resort structured data on Contact */}
      <JsonLd data={getResortSchema()} />

      <div className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />

          {/* Heading */}
          <div className="max-w-3xl my-8 space-y-4">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
              Direct Host Communication
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
              Contact Splendid View Rajgarh
            </h1>
            <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
              We believe in personal mountain hospitality. Reach out directly
              via phone, WhatsApp, or our enquiry form to check availability,
              seasonal tariffs, or driving directions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Left Column: Official Contact & NAP (Real Semantic Text) */}
            <div className="lg:col-span-6 space-y-8">
              {/* NAP Card */}
              <div className="bg-white rounded-3xl p-8 border border-warm-200/90 shadow-md space-y-6">
                <h2 className="font-serif text-2xl font-bold text-forest-950 border-b border-warm-200 pb-3">
                  Official Property Details
                </h2>

                <address className="not-italic space-y-5 text-sm text-warm-800">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-peach-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-950 font-serif text-base">
                        {businessDetails.name}
                      </strong>
                      <span className="leading-relaxed block text-warm-700">
                        {businessDetails.address.village},{" "}
                        {businessDetails.address.po},{" "}
                        {businessDetails.address.tehsil},{" "}
                        {businessDetails.address.district},{" "}
                        {businessDetails.address.state} –{" "}
                        {businessDetails.address.postalCode}, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="block text-forest-950">
                        Direct Reservation Phones:
                      </strong>
                      {businessDetails.phones.map((phone, idx) => (
                        <div key={phone}>
                          <a
                            href={`tel:${phone}`}
                            className="text-forest-900 font-semibold hover:text-peach-600 transition-colors"
                          >
                            {businessDetails.displayPhones[idx]}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-forest-950">Timings:</strong>
                      <span className="text-warm-700 block">
                        Front Desk: {businessDetails.hours.frontDesk}
                      </span>
                      <span className="text-warm-700 block">
                        Check-in: {businessDetails.hours.checkIn} • Check-out:{" "}
                        {businessDetails.hours.checkOut}
                      </span>
                    </div>
                  </div>
                </address>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-warm-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${businessDetails.phones[0]}`}
                    className="flex items-center justify-center gap-2 bg-forest-900 text-white font-medium text-xs py-3.5 px-4 rounded-xl shadow hover:bg-forest-800 transition-all"
                  >
                    <PhoneIcon className="w-4 h-4 text-emerald-300" />
                    <span>Call Host Directly</span>
                  </a>

                  <a
                    href={businessDetails.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium text-xs py-3.5 px-4 rounded-xl shadow hover:bg-[#20bd5a] transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Location & Map Card */}
              <div className="bg-forest-950 text-white rounded-3xl p-8 space-y-4 shadow-xl border border-forest-900">
                <h3 className="font-serif text-xl font-bold text-warm-50">
                  Google Maps Directions
                </h3>
                <p className="text-sm text-warm-200 leading-relaxed">
                  Pinpoint our location in Village Tikkari Tali, Rajgarh, and
                  generate live driving directions right from your phone before
                  setting off.
                </p>
                <div className="pt-2">
                  <a
                    href={businessDetails.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-peach-500 hover:bg-peach-600 text-white font-medium text-xs py-3 px-5 rounded-xl transition-all shadow"
                  >
                    <MapPinIcon className="w-4 h-4" />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Enquiry Form */}
            <div className="lg:col-span-6" id="enquiry">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
