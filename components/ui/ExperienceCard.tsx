import React from "react";
import Image from "next/image";
import { ExperienceItem } from "@/content/experiences";
import { CheckIcon } from "@/components/ui/icons";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-100">
        <Image
          src={experience.image}
          alt={`${experience.title} in Rajgarh, Himachal Pradesh`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
          {experience.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-forest-950">
            {experience.title}
          </h3>
          <p className="text-xs text-peach-700 font-medium">
            {experience.tagline}
          </p>
          <p className="text-sm text-olive-800 leading-relaxed">
            {experience.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold text-forest-900 uppercase tracking-wider block">
            Experience Highlights:
          </span>
          <ul className="space-y-1 text-xs text-warm-700">
            {experience.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckIcon className="w-3.5 h-3.5 text-forest-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
