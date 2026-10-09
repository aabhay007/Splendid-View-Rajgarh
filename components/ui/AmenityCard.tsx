import React from "react";
import { AmenityItem } from "@/content/amenities";
import {
  MountainIcon,
  UtensilsIcon,
  FlameIcon,
  WifiIcon,
  CarIcon,
  DropletIcon,
} from "@/components/ui/icons";

interface AmenityCardProps {
  amenity: AmenityItem;
}

export function AmenityCard({ amenity }: AmenityCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "mountain":
        return <MountainIcon className="w-6 h-6 text-forest-700" />;
      case "utensils":
        return <UtensilsIcon className="w-6 h-6 text-forest-700" />;
      case "flame":
        return <FlameIcon className="w-6 h-6 text-peach-600" />;
      case "wifi":
        return <WifiIcon className="w-6 h-6 text-forest-700" />;
      case "car":
        return <CarIcon className="w-6 h-6 text-forest-700" />;
      case "droplet":
        return <DropletIcon className="w-6 h-6 text-sky-600" />;
      default:
        return <MountainIcon className="w-6 h-6 text-forest-700" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-warm-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center mb-4">
          {getIcon(amenity.icon)}
        </div>
        <div className="text-[11px] font-semibold text-peach-700 uppercase tracking-wider mb-1">
          {amenity.category}
        </div>
        <h3 className="font-serif text-lg font-bold text-forest-950 mb-2">
          {amenity.title}
        </h3>
        <p className="text-sm text-warm-700 leading-relaxed">
          {amenity.description}
        </p>
      </div>
    </div>
  );
}
