import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { travelRoutes, publicTransitGuides } from "@/content/routes";
import { businessDetails } from "@/content/business";
import {
  MapPinIcon,
  CheckIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "How to Reach Rajgarh Sirmour | Splendid View Eco Orchard Resort",
  description:
    "Complete driving directions to Splendid View Eco Orchard Resort from Delhi (7:30–8:00h, 369 km), Chandigarh (3:30–4:00h, 124 km) & Shimla (3:30–4:00h, 108 km). Road conditions, railway stations & transit guides.",
  path: "/how-to-reach",
  keywords: [
    "How to reach Splendid View Eco Orchard Resort",
    "Delhi to Rajgarh road route",
    "Chandigarh to Rajgarh distance",
    "Driving route to Splendid View Rajgarh",
    "Nearest railway station to Rajgarh",
  ],
});

export default function HowToReachPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "How to Reach", href: "/how-to-reach" }]} />

        {/* Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Travel Directions & Route Maps
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            How to Reach Splendid View Rajgarh
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            Perched in Village Tikkari Tali, Rajgarh, District Sirmour, our
            property is conveniently connected via smooth highways from
            Chandigarh, Delhi, and Shimla.
          </p>
        </div>

        {/* Quick Distance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-wider block">
              Tri-City Escape
            </span>
            <h2 className="font-serif text-xl font-bold text-forest-950">
              From Chandigarh
            </h2>
            <div className="space-y-1 text-xs text-warm-700">
              <p>
                <strong>Distance:</strong> 124 km
              </p>
              <p>
                <strong>Driving Time:</strong> 3:30 - 4:00 Hours
              </p>
              <p>
                <strong>Route:</strong> Himalayan Exp. → Kumarhatti → Giri Pul
              </p>
            </div>
          </div>

          <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-wider block">
              Delhi NCR Weekend
            </span>
            <h2 className="font-serif text-xl font-bold text-forest-950">
              From Delhi / NCR
            </h2>
            <div className="space-y-1 text-xs text-warm-700">
              <p>
                <strong>Distance:</strong> 369 km
              </p>
              <p>
                <strong>Driving Time:</strong> 7:30 - 8:00 Hours
              </p>
              <p>
                <strong>Route:</strong> NH44 → Ambala → Kumarhatti → Giri Pul
              </p>
            </div>
          </div>

          <div className="bg-beige-50 rounded-2xl p-6 border border-warm-300/80 shadow-sm space-y-3">
            <span className="text-xs font-bold text-peach-600 uppercase tracking-wider block">
              Tranquil Alternative
            </span>
            <h2 className="font-serif text-xl font-bold text-forest-950">
              From Shimla
            </h2>
            <div className="space-y-1 text-xs text-warm-700">
              <p>
                <strong>Distance:</strong> 108 km
              </p>
              <p>
                <strong>Driving Time:</strong> 3:30 - 4:00 Hours
              </p>
              <p>
                <strong>Route:</strong> Solan / Yashwant Nagar or Chhaila route
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Road Route Guides */}
        <div className="space-y-12 mb-16">
          <div className="border-b border-warm-200 pb-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Detailed Driving Directions by Origin
            </h2>
            <p className="text-sm text-warm-600">
              Turn-by-turn road descriptions, highway conditions, and pitstop
              tips.
            </p>
          </div>

          {travelRoutes.map((route, idx) => (
            <div
              key={idx}
              className="bg-beige-50 rounded-3xl p-8 sm:p-10 border border-warm-300/80 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-warm-100 pb-4">
                <div>
                  <span className="text-xs font-semibold text-peach-600 uppercase tracking-wider">
                    Route #{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    {route.origin}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-forest-900 bg-forest-50 px-4 py-2 rounded-xl">
                  <span>🚗 {route.travelTime}</span>
                </div>
              </div>

              <div className="space-y-2">
                <strong className="text-xs uppercase tracking-wider text-warm-500 block">
                  Recommended Driving Highway:
                </strong>
                <p className="text-sm text-forest-950 font-medium bg-warm-50 p-3 rounded-xl border border-warm-200/60">
                  {route.recommendedRoute}
                </p>
              </div>

              <div>
                <strong className="text-xs uppercase tracking-wider text-warm-500 block mb-2">
                  Road Condition:
                </strong>
                <p className="text-sm text-warm-700 leading-relaxed">
                  {route.roadCondition}
                </p>
              </div>

              <div className="space-y-2">
                <strong className="text-xs uppercase tracking-wider text-warm-500 block">
                  Turn-by-Turn Navigation Steps:
                </strong>
                <ol className="space-y-2 text-sm text-warm-800 list-decimal pl-5">
                  {route.directions.map((step, sIdx) => (
                    <li key={sIdx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-2 border-t border-warm-100">
                <strong className="text-xs uppercase tracking-wider text-warm-500 block mb-2">
                  Key Traveler Tips:
                </strong>
                <ul className="space-y-1.5 text-xs text-warm-700">
                  {route.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Public Transit Section (Railways & Flights) */}
        <div className="bg-forest-950 text-white rounded-3xl p-8 sm:p-12 mb-16 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-peach-300 uppercase tracking-widest">
              Air & Rail Connections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-50 mt-1">
              Public Transit & Taxi Access
            </h2>
            <p className="text-sm text-warm-300 mt-2">
              For travelers arriving via commercial flights or express trains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-warm-200">
            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-800 space-y-3">
              <h3 className="font-serif text-lg font-bold text-warm-50">
                By Train (Railways)
              </h3>
              <p>
                <strong>{publicTransitGuides.railway.nearestBroadGauge}</strong>
              </p>
              <p className="text-xs text-warm-300 leading-relaxed">
                {publicTransitGuides.railway.details}
              </p>
              <p className="text-xs text-warm-300 leading-relaxed pt-2 border-t border-forest-800">
                <strong>Toy Train Heritage Option:</strong>{" "}
                {publicTransitGuides.railway.toyTrainOption}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-800 space-y-3">
              <h3 className="font-serif text-lg font-bold text-warm-50">
                By Air (Flights)
              </h3>
              <p>
                <strong>{publicTransitGuides.air.nearestAirport}</strong>
              </p>
              <p className="text-xs text-warm-300 leading-relaxed">
                {publicTransitGuides.air.details}
              </p>
              <p className="text-xs text-warm-300 leading-relaxed pt-2 border-t border-forest-800">
                <strong>Shimla Airport (SLV):</strong>{" "}
                {publicTransitGuides.air.shimlaAirport}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={businessDetails.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-peach-500 hover:bg-peach-600 text-white font-medium text-xs py-3 px-5 rounded-xl transition-all shadow"
            >
              <MapPinIcon className="w-4 h-4" />
              <span>Open Exact Destination in Google Maps</span>
            </a>
            <a
              href={`tel:${businessDetails.phones[0]}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-warm-100 font-medium text-xs py-3 px-5 rounded-xl transition-all border border-white/20"
            >
              <PhoneIcon className="w-4 h-4 text-emerald-300" />
              <span>Call Host for Real-Time Route Assistance</span>
            </a>
          </div>
        </div>

        <CtaBanner
          heading="Planning Your Journey to Rajgarh?"
          subheading="Save our contact details before you start your drive. Our team is always a phone call away to guide your arrival."
        />
      </div>
    </div>
  );
}
