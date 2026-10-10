import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RoomCard } from "@/components/ui/RoomCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { rooms } from "@/content/rooms";
import { CheckIcon } from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Cottages, Rooms & Suites in Rajgarh | Splendid View Eco Orchard Resort",
  description:
    "Explore our valley-facing cottages and suites in Rajgarh, Himachal Pradesh. Private balconies, uninterrupted Giri valley panoramas, 24/7 hot water & fast Wi-Fi.",
  path: "/rooms",
  image: "/images/hero/resort-cottages.webp",
  keywords: [
    "Cottages in Rajgarh Himachal",
    "Rooms in Rajgarh resort",
    "Splendid View Eco Orchard Resort rooms",
    "Valley view cottages Rajgarh",
    "Best family suite Rajgarh",
    "Himalayan cottage stay",
  ],
});

export default function RoomsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Rooms & Suites", href: "/rooms" }]} />

        {/* Page Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Tranquil Accommodation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Rooms & Suites at Splendid View Rajgarh
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            Every room at Splendid View is designed to frame the majestic Giri
            river valley. Step onto your private balcony for cool mountain
            breezes, sunrise views, and peaceful comfort.
          </p>
        </div>

        {/* Direct Booking Advantage Callout */}
        <div className="bg-warm-100/70 border border-warm-200/90 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-bold text-forest-950">
              Why Book Directly With Us?
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-warm-700">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Guaranteed Best Available Rates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Zero Booking Engine Commission
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-forest-700" />
                Personalized Room Selection
              </span>
            </div>
          </div>
          <a
            href="tel:+918219515083"
            className="inline-flex items-center justify-center bg-forest-900 text-white text-xs font-semibold py-3 px-5 rounded-xl hover:bg-forest-800 transition-colors whitespace-nowrap"
          >
            Call Directly for Rates
          </a>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, idx) => (
            <RoomCard key={room.slug} room={room} priority={idx === 0} />
          ))}
        </div>

        <CtaBanner
          heading="Have Questions About Room Selection?"
          subheading="Whether you are planning a couple weekend, family vacation, or group gathering, contact us directly to reserve the perfect room category."
        />
      </div>
    </div>
  );
}
