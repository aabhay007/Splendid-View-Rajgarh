import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AmenityCard } from "@/components/ui/AmenityCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { amenitiesList } from "@/content/amenities";

export const metadata = constructMetadata({
  title: "Amenities & Facilities | Splendid View Eco Orchard Resort Rajgarh",
  description:
    "Explore amenities at Splendid View Eco Orchard Resort: private valley-facing cottage balconies, homestyle Himachali dining, evening bonfires, lush lawns, hot water & high-speed Wi-Fi.",
  path: "/amenities",
  image: "/resort-images/home/resort-peach-orchards-drone-aerial-view.webp",
  keywords: [
    "Eco resort amenities Rajgarh",
    "Facilities Splendid View Eco Orchard Resort",
    "Bonfire cottage stay Himachal",
    "Wi-Fi mountain stay Rajgarh",
    "Valley balcony cottages Himachal",
  ],
});

export default function AmenitiesPage() {
  const propertyAmenities = amenitiesList.filter((a) => a.category === "Property");
  const comfortAmenities = amenitiesList.filter((a) => a.category === "Comfort");
  const experienceAmenities = amenitiesList.filter((a) => a.category === "Experiences");
  const diningAmenities = amenitiesList.filter((a) => a.category === "Dining");

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Amenities", href: "/amenities" }]} />

        {/* Page Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Thoughtful Hospitality
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Resort Amenities & Guest Facilities
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            From panoramic valley-facing balconies to warm homestyle meals and
            reliable Wi-Fi, discover the comforts that make Splendid View Rajgarh
            your home in the Himalayas.
          </p>
        </div>

        {/* Real Amenity Photo Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xs bg-warm-200 group">
            <Image
              src="/resort-images/amenties/bonfire/evening-bonfire-pit-gathering.webp"
              alt="Guests gathering around evening bonfire"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-semibold">Evening Campfire Pit</span>
            </div>
          </div>

          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xs bg-warm-200 group">
            <Image
              src="/resort-images/restarunt/dining-table-valley-view-setup.jpeg"
              alt="Homestyle mountain dining restaurant"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-semibold">Homestyle Dining Hall</span>
            </div>
          </div>

          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xs bg-warm-200 group">
            <Image
              src="/resort-images/home/two-cottages-balconies-sitout.jpeg"
              alt="Private cottage balconies and sit-out terrace"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-semibold">Private Valley Balconies</span>
            </div>
          </div>

          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xs bg-warm-200 group">
            <Image
              src="/resort-images/home/resort-peach-orchards-drone-aerial-view.webp"
              alt="Surrounding peach orchards and mountain trails"
              fill
              sizes="(max-width: 640px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-semibold">Peach Orchards & Trails</span>
            </div>
          </div>
        </div>

        {/* Section 1: Property & Outdoors */}
        <div className="mb-14 space-y-6">
          <div className="border-b border-warm-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-forest-950">
              Property & Outdoor Spaces
            </h2>
            <p className="text-sm text-warm-600">
              Spaces designed to immerse you in pristine mountain nature.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        {/* Section 2: Dining & Culinary Comfort */}
        <div className="mb-14 space-y-6">
          <div className="border-b border-warm-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-forest-950">
              Homestyle Mountain Dining
            </h2>
            <p className="text-sm text-warm-600">
              Wholesome meals cooked fresh to order with regional warmth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diningAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        {/* Section 3: In-Room Comfort & Connectivity */}
        <div className="mb-14 space-y-6">
          <div className="border-b border-warm-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-forest-950">
              Comfort & Connectivity
            </h2>
            <p className="text-sm text-warm-600">
              Modern essentials to keep you refreshed and connected.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comfortAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        {/* Section 4: Activities & Experiences */}
        <div className="mb-14 space-y-6">
          <div className="border-b border-warm-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-forest-950">
              Nature & Leisure Activities
            </h2>
            <p className="text-sm text-warm-600">
              Unwind with evening bonfires and gentle village trails.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAmenities.map((amenity) => (
              <AmenityCard key={amenity.id} amenity={amenity} />
            ))}
          </div>
        </div>

        <CtaBanner
          heading="Ready to Enjoy These Mountain Comforts?"
          subheading="Contact us directly to reserve your stay and experience genuine Himachali warmth in Rajgarh."
        />
      </div>
    </div>
  );
}
