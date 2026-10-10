import React from "react";
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
