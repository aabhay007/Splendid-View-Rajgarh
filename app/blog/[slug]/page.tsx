import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";
import { constructMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { getArticleSchema } from "@/lib/seo/schema";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ClockIcon, CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Splendid View Rajgarh`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    ogType: "article",
    keywords: post.tags,
  });
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd data={getArticleSchema(post)} />

      <article className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          {/* Article Header */}
          <header className="my-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-warm-600">
              <span className="px-3 py-1 rounded-full bg-peach-100 text-peach-800 font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-warm-700 leading-relaxed font-sans">
              {post.excerpt}
            </p>
          </header>

          {/* Feature Cover Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg bg-warm-200 mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div className="space-y-8 text-warm-900 leading-relaxed text-base sm:text-lg border-b border-warm-200 pb-12">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.sectionHeading && (
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 pt-4">
                    {section.sectionHeading}
                  </h2>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-warm-800">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4 bg-warm-100/60 p-6 rounded-2xl border border-warm-200/80">
                    {section.bulletPoints.map((point, ptIdx) => (
                      <li key={ptIdx} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckIcon className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className="my-6 border-l-4 border-peach-500 pl-6 py-2 italic font-serif text-lg sm:text-xl text-forest-950 bg-warm-100/40 rounded-r-2xl">
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="my-8 p-6 bg-white rounded-2xl border border-warm-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-forest-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
              SV
            </div>
            <div>
              <strong className="block text-sm text-forest-950 font-serif">
                {post.author}
              </strong>
              <p className="text-xs text-warm-600 mt-0.5">
                Written by the local hosting and hospitality team at Splendid
                View Rajgarh, Village Tikkari Tali, District Sirmour, Himachal
                Pradesh.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {otherPosts.length > 0 && (
            <div className="my-12">
              <h3 className="font-serif text-2xl font-bold text-forest-950 mb-6">
                More Travel Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-warm-200 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-peach-700 uppercase tracking-wider block mb-1">
                        {related.category}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-forest-700 transition-colors">
                        {related.title}
                      </h4>
                    </div>
                    <div className="pt-4 flex items-center gap-1 text-xs text-forest-800 font-medium">
                      <span>Read Guide</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <CtaBanner
            heading="Experience the Giri Valley in Person"
            subheading="Book your stay directly with Splendid View Rajgarh for best rates, valley views, and authentic hospitality."
          />
        </div>
      </article>
    </>
  );
}
