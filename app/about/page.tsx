import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { businessDetails } from "@/content/business";
import { MapPinIcon, CheckIcon } from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "About Us | Splendid View Eco Orchard Resort Rajgarh",
  description:
    "Discover the story of Splendid View Eco Orchard Resort in Rajgarh, District Sirmour: tranquil Giri valley panoramas, alpine pine slopes, peach orchards & heartfelt Himachali hospitality.",
  path: "/about",
  keywords: [
    "About Splendid View Eco Orchard Resort",
    "Splendid View Rajgarh story",
    "Eco resort Himachal Pradesh",
    "Rajgarh Sirmour cottages",
    "Village Tikkari Tali eco resort",
  ],
});

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

        {/* Header */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Our Mountain Sanctuary
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            About Splendid View Rajgarh
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            A tranquil mountain haven perched above the Giri river valley in
            Village Tikkari Tali, District Sirmour, crafted for travelers who
            revere silence, fresh pine air, and genuine hospitality.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-16 shadow-lg bg-warm-200">
          <Image
            src="/images/hero/resort-panoramic-view.svg"
            alt="Splendid View Rajgarh mountain panorama overlooking Giri valley"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-warm-800 leading-relaxed text-base">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Rooted in the Peach Valley of Himachal Pradesh
            </h2>
            <p>
              Rajgarh has long been celebrated across North India as the
              &quot;Peach Bowl of Asia&quot;. Tucked into the undulating ridges of
              District Sirmour, the valley is blessed with fertile mountain soil,
              pure glacial streams feeding into the Giri river, and expansive
              orchards of peach, plum, and apricot trees.
            </p>
            <p>
              Splendid View Rajgarh was established with a singular, clear vision:
              to offer travelers a peaceful alternative to commercialized,
              traffic-heavy hill stations. Situated in Village Tikkari Tali
              (Jola), our property commands wide, unobstructed 180-degree
              panoramas of the entire Giri basin, where morning mist rises
              gently through the pine slopes and evening brings crystal-clear,
              starlit skies.
            </p>
            <p>
              We believe in honest, heartfelt hospitality. There are no crowded
              tour buses or frantic itineraries here. Instead, our guests enjoy
              the restorative cadence of mountain life: breakfast in the morning
              sun on a private balcony, gentle afternoon strolls through
              terraced orchard trails, wholesome homestyle meals, and warm
              bonfire conversations under the stars.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-serif text-xl font-bold text-forest-950">
                What Guides Our Hospitality
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Peace Over Crowds:</strong> We deliberately preserve a
                    quiet, calm residential atmosphere for couples and families.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Wholesome, Fresh Food:</strong> Every meal is cooked
                    fresh in our kitchen using quality regional ingredients and
                    pure mountain water.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct, Transparent Service:</strong> We communicate
                    directly with our guests—no inflated intermediary markups or
                    hidden service fees.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Info & Location Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-warm-200/90 shadow-md space-y-6">
            <h3 className="font-serif text-xl font-bold text-forest-950 border-b border-warm-200 pb-3">
              Property Overview
            </h3>

            <div className="space-y-4 text-sm text-warm-700">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-forest-950">Official Address:</strong>
                  <span>{businessDetails.address.fullFormatted}</span>
                </div>
              </div>

              <div>
                <strong className="block text-forest-950">Elevation:</strong>
                <span>{businessDetails.geo.elevation}</span>
              </div>

              <div>
                <strong className="block text-forest-950">Atmosphere:</strong>
                <span>Tranquil, orchard-facing, nature retreat</span>
              </div>

              <div>
                <strong className="block text-forest-950">Check-in / Check-out:</strong>
                <span>
                  {businessDetails.hours.checkIn} / {businessDetails.hours.checkOut}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-warm-200">
              <Link
                href="/rooms"
                className="w-full inline-flex items-center justify-center bg-forest-900 text-white font-medium text-sm py-3 px-6 rounded-xl hover:bg-forest-800 transition-colors shadow"
              >
                View Rooms & Suites
              </Link>
            </div>
          </div>
        </div>

        <CtaBanner
          heading="Come Experience Rajgarh for Yourself"
          subheading="Leave the highway behind and let the peace of the Giri valley recharge your spirits."
        />
      </div>
    </div>
  );
}
