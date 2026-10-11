import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";

export const dynamic = "force-dynamic";

export const metadata = constructMetadata({
  title: "Photo Gallery | Splendid View Eco Orchard Resort Rajgarh",
  description:
    "Explore photos of Splendid View Eco Orchard Resort: authentic hillside cottages, private balconies, panoramic Giri valley vistas, dining hall, evening bonfires & happy guest moments.",
  path: "/gallery",
  image: "/resort-images/gallery/09-family-viewpoint-terrace-portrait.webp",
  keywords: [
    "Splendid View Eco Orchard Resort photos",
    "Rajgarh cottages gallery",
    "Eco resort Himachal photos",
    "Giri valley cottage images",
    "Rajgarh peach orchard photos",
  ],
});

interface GalleryItem {
  src: string;
  title: string;
  alt: string;
}

function getGalleryImages(): GalleryItem[] {
  const galleryDir = path.join(process.cwd(), "public", "resort-images", "gallery");
  try {
    if (!fs.existsSync(galleryDir)) {
      return [];
    }

    const files = fs.readdirSync(galleryDir);
    const validExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

    const imagesWithStats = files
      .filter((file) => validExtensions.has(path.extname(file).toLowerCase()))
      .map((file) => {
        const filePath = path.join(galleryDir, file);
        let mtime = 0;
        try {
          mtime = fs.statSync(filePath).mtimeMs;
        } catch {
          mtime = 0;
        }

        // Check for numeric prefix like 01-, 1-, 02_
        const prefixMatch = file.match(/^(\d+)[-_]/);
        const order = prefixMatch ? parseInt(prefixMatch[1], 10) : Number.MAX_SAFE_INTEGER;

        return { file, mtime, order };
      });

    // Sort by numeric prefix order first, then newest upload, then alphabetical
    imagesWithStats.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order;
      }
      return b.mtime - a.mtime || a.file.localeCompare(b.file);
    });

    return imagesWithStats.map(({ file }) => {
      const nameWithoutExt = path.parse(file).name;
      // Strip numeric prefix for display title (e.g. "01-sunrise-view" -> "sunrise-view")
      const cleanName = nameWithoutExt.replace(/^(\d+)[-_]+/, "");
      const formattedTitle = cleanName
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        src: `/resort-images/gallery/${file}`,
        title: formattedTitle,
        alt: `${formattedTitle} - Splendid View Rajgarh`,
      };
    });
  } catch (err) {
    console.error("Error reading resort gallery directory:", err);
    return [];
  }
}

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />

        {/* Heading */}
        <div className="max-w-3xl my-6 sm:my-8 space-y-3 sm:space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Visual Tour
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Photo Gallery of Splendid View Rajgarh
          </h1>
          <p className="text-sm sm:text-lg text-warm-700 leading-relaxed">
            Catch a glimpse of the peaceful life waiting for you in Village
            Tikkari Tali: sun-drenched balconies, lush peach orchards, clear
            mountain waters, and dramatic valley skies.
          </p>
        </div>

        {/* ================= MOBILE VIEW (sm:hidden) ================= */}
        {/* Direct clean 2-column image grid with NO cards, NO titles, and NO text */}
        <div className="grid grid-cols-2 gap-2 sm:hidden mb-12">
          {galleryImages.map((item, idx) => (
            <div
              key={item.src}
              className="relative aspect-square overflow-hidden rounded-xl bg-warm-200"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw"
                loading={idx < 6 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* ================= DESKTOP & TABLET VIEW (hidden sm:grid) ================= */}
        {/* Responsive 2/3 column card grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((item, idx) => (
            <figure
              key={item.src}
              className="group bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-warm-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  loading={idx < 6 ? "eager" : "lazy"}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-4 bg-white border-t border-warm-100 flex-1 flex flex-col justify-center">
                <h2 className="font-serif text-base font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                  {item.title}
                </h2>
              </figcaption>
            </figure>
          ))}
        </div>

        <CtaBanner
          heading="Want to See These Views in Person?"
          subheading="Nothing matches the feeling of breathing crisp pine air from your private balcony. Reach out to reserve your room today."
        />
      </div>
    </div>
  );
}
