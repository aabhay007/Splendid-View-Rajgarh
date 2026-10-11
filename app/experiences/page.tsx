import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { experiencesList } from "@/content/experiences";

export const metadata = constructMetadata({
  title: "Things to Do in Rajgarh | Splendid View Eco Orchard Resort",
  description:
    "Explore things to do around Splendid View Eco Orchard Resort in Rajgarh: peach orchard walks, Giri river picnics, Baru Sahib Gurdwara, Churdhar trek & night stargazing.",
  path: "/experiences",
  keywords: [
    "Things to do in Rajgarh",
    "Rajgarh tourist attractions",
    "Splendid View Eco Orchard Resort experiences",
    "Places to visit in Rajgarh Sirmour",
    "Baru Sahib Gurdwara visit",
    "Giri river picnic Rajgarh",
    "Churdhar peak trekking",
  ],
});

export default function ExperiencesPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Experiences", href: "/experiences" }]} />

        {/* Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Unexplored Sirmour
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Things to Do Around Rajgarh, Himachal
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            From the fragrant peach orchards of the Peach Bowl of Asia to the
            cool waters of the Giri river and sacred shrines in the mountains,
            explore the authentic sights of District Sirmour.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiencesList.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} />
          ))}
        </div>


        <CtaBanner
          heading="Ready to Explore District Sirmour?"
          subheading="Our friendly local team is happy to provide directions, suggest day trip itineraries, and ensure a memorable mountain holiday."
        />
      </div>
    </div>
  );
}
