import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { blogPosts } from "@/content/blog";
import { ClockIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata = constructMetadata({
  title: "Travel Guides & Himachal Blog | Splendid View Eco Orchard Resort",
  description:
    "Explore insider travel guides for Rajgarh and District Sirmour: road trip routes, peach blossom seasons, offbeat attractions & mountain getaway tips from Splendid View Eco Orchard Resort.",
  path: "/blog",
  keywords: [
    "Rajgarh travel guide",
    "Himachal eco resort blog",
    "Delhi to Rajgarh road trip",
    "Peach bowl of Asia guide",
    "Offbeat Himachal road trips",
  ],
});

export default function BlogHubPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Travel Guides", href: "/blog" }]} />

        {/* Heading */}
        <div className="max-w-3xl my-8 space-y-4">
          <span className="text-xs font-bold text-peach-600 uppercase tracking-widest">
            Himachal Travel Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 leading-tight">
            Rajgarh Travel Guides & Stories
          </h1>
          <p className="text-base sm:text-lg text-warm-700 leading-relaxed">
            Curated road trip guides, seasonal orchard insights, and local tips
            to help you plan the perfect offbeat mountain escape in District
            Sirmour.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-warm-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-warm-200">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-forest-950/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-warm-500">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-forest-950 group-hover:text-forest-700 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-sm text-warm-700 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-warm-100 flex items-center justify-between">
                  <span className="text-xs text-warm-600 font-medium">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-peach-700 hover:text-peach-800 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <CtaBanner
          heading="Turn These Stories Into Your Next Trip"
          subheading="Splendid View Rajgarh welcomes you with panoramic valley views, fresh pine air, and genuine mountain serenity."
        />
      </div>
    </div>
  );
}
