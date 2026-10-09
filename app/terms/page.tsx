import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { businessDetails } from "@/content/business";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Splendid View Rajgarh",
  description:
    "Review guest stay guidelines, check-in timings, identification requirements, and property policies for Splendid View Rajgarh.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Terms & Conditions", href: "/terms" }]} />

        <div className="my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Guest Guidelines
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950">
            Terms & Conditions of Stay
          </h1>
          <p className="text-sm text-warm-600">
            Last Updated: January 2025 • Splendid View Rajgarh
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-sm space-y-8 text-warm-800 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              1. Check-In & Check-Out Timings
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-warm-700">
              <li>
                <strong>Check-In Time:</strong> From {businessDetails.hours.checkIn} onwards.
              </li>
              <li>
                <strong>Check-Out Time:</strong> By {businessDetails.hours.checkOut}.
              </li>
              <li>
                Early check-in and late check-out requests are subject to room
                availability and prior coordination with our front desk.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              2. Mandatory Identification Policy
            </h2>
            <p>
              In accordance with local Himachal Pradesh tourism and security
              regulations, all adult guests must present a valid government-issued
              photo identification (Aadhaar Card, Passport, Voter ID card, or
              Driving License) upon arrival. PAN Cards are not accepted as valid
              address proof.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              3. Direct Reservations & Confirmations
            </h2>
            <p>
              Room reservations are made directly via phone, WhatsApp, or email
              confirmation. An advance deposit may be requested during peak
              summer holiday seasons, blossom periods, or extended long weekends
              to secure your room allocation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              4. Mountain Peace & Conduct
            </h2>
            <p>
              Splendid View Rajgarh is a peaceful nature retreat located in a
              traditional village setting. We kindly request all guests to respect
              nighttime quiet hours (10:30 PM to 7:00 AM) to ensure all visitors
              and local village neighbors enjoy restful sleep.
            </p>
            <p>
              Loud outdoor loudspeakers or commercial DJ equipment are strictly
              prohibited to preserve the quiet natural ecosystem of the valley.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-forest-950">
              5. Environmental Responsibility
            </h2>
            <p>
              We are committed to preserving the pristine beauty of District
              Sirmour and the Giri river basin. Please dispose of all personal
              waste in designated bins and avoid littering plastics along mountain
              orchard trails.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
