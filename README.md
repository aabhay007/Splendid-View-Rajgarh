# Splendid View Rajgarh — Official Website

> **Production-Ready, SEO-First Digital Presence for Splendid View Rajgarh**  
> Perched in Village Tikkari Tali (Jola), Tehsil Rajgarh, District Sirmour, Himachal Pradesh 173101, India.

---

## 🏔️ Project Overview

This website is engineered specifically for **Splendid View Rajgarh** as a high-performance, conversion-oriented digital brochure and technical SEO powerhouse.

- **Zero Database / Zero Auth**: Conversions take place via direct phone calls (`tel:`), instant WhatsApp chat, the Zod-validated enquiry form (with honeypot anti-spam protection), and Google Maps driving directions.
- **100% Static Generation (SSG)**: Lightning-fast TTFB, optimized for mobile devices, targeting 95+ scores across Core Web Vitals and Lighthouse audits.
- **Strict Separation of Concerns**: All business data, room specifications, tariffs, FAQs, itineraries, and SEO copy live in typed data files under `/content/`. You can edit every word of business copy without touching any React component.

---

## 📂 Project Architecture

```
d:\Splendid-View-Rajgarh/
├── app/
│   ├── layout.tsx                     # Root layout: self-hosted fonts, header, footer, sticky mobile bar, GA4
│   ├── page.tsx                       # Home page (LCP optimized, LodgingBusiness & FAQPage schema)
│   ├── about/page.tsx                 # Story of Tikkari Tali, peach valley heritage & hospitality
│   ├── rooms/
│   │   ├── page.tsx                   # Rooms listing catalog
│   │   └── [slug]/page.tsx            # Dynamic SSG room detail pages (generateStaticParams + HotelRoom schema)
│   ├── amenities/page.tsx             # Categorized amenities (Property, Comfort, Dining, Experiences)
│   ├── gallery/page.tsx               # Categorized photo gallery with descriptive alt tags
│   ├── experiences/page.tsx           # Local attractions (Peach orchards, Giri river, Baru Sahib, Churdhar)
│   ├── how-to-reach/page.tsx          # Driving routes from Delhi, Chandigarh, Shimla & transit options
│   ├── contact/page.tsx               # Full NAP, direct calling, WhatsApp, and booking enquiry form
│   ├── faq/page.tsx                   # Master FAQ repository with Schema.org FAQPage structured data
│   ├── blog/
│   │   ├── page.tsx                   # Travel guides & blog hub
│   │   └── [slug]/page.tsx            # Dynamic SSG blog post articles (Article schema)
│   ├── privacy-policy/page.tsx        # Transparent privacy policy
│   ├── terms/page.tsx                 # Guest guidelines, ID proofs, check-in/out policies
│   │
│   │   # 11 Targeted SEO Landing Pages (500+ words each, unique H1, FAQs & internal links)
│   ├── resort-in-rajgarh/page.tsx
│   ├── best-hotel-in-himachal-pradesh/page.tsx
│   ├── weekend-getaway-from-delhi/page.tsx
│   ├── weekend-getaway-from-chandigarh/page.tsx
│   ├── romantic-getaway-himachal/page.tsx
│   ├── offbeat-places-himachal/page.tsx
│   ├── rajgarh-peach-valley/page.tsx
│   ├── weekend-packages/page.tsx
│   ├── summer-getaway-himachal/page.tsx
│   ├── one-day-trip-near-rajgarh/page.tsx
│   ├── stay-near-shimla/page.tsx
│   │
│   ├── sitemap.ts                     # Auto-generated dynamic XML sitemap (all 25+ routes)
│   ├── robots.ts                      # Auto-generated robots.txt referencing sitemap.xml
│   ├── not-found.tsx                  # Custom branded 404 page
│   ├── opengraph-image.tsx            # Dynamic edge OG preview card (1200x630)
│   └── globals.css                    # Tailwind CSS tokens, accessibility & motion preferences
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Sticky navigation with micro-bar & desktop links
│   │   ├── Footer.tsx                 # Comprehensive footer with official NAP text & schema
│   │   ├── MobileNav.tsx              # Mobile drawer with keyboard accessibility & body scroll lock
│   │   ├── StickyMobileBar.tsx        # Fixed bottom conversion bar (Call Now & WhatsApp)
│   │   └── Breadcrumbs.tsx            # Visual breadcrumbs + JSON-LD BreadcrumbList schema
│   ├── seo/
│   │   ├── JsonLd.tsx                 # Inline JSON-LD structured data script injector
│   │   └── SeoLandingPageTemplate.tsx # Reusable rich 500+ word landing page template
│   ├── ui/
│   │   ├── RoomCard.tsx               # Room showcase card with badges and actions
│   │   ├── AmenityCard.tsx            # Amenity badge/card with custom SVG icons
│   │   ├── ExperienceCard.tsx         # Local excursion card with specs and highlights
│   │   ├── FaqAccordion.tsx           # Native HTML details/summary accessible accordion
│   │   ├── CtaBanner.tsx              # High-impact mountain conversion banner
│   │   └── icons.tsx                  # Lightweight, zero-dependency SVG icon set
│   └── forms/
│       └── EnquiryForm.tsx            # Client form with Zod validation, honeypot & pending states
│
├── content/                           # 👈 ALL EDITABLE BUSINESS CONTENT LIVES HERE
│   ├── business.ts                    # Official NAP, phones, WhatsApp, coordinates, hours
│   ├── rooms.ts                       # Room types, capacities, amenities, tariffs
│   ├── amenities.ts                   # Property amenities and descriptions
│   ├── experiences.ts                 # Local attractions and excursion guides
│   ├── routes.ts                      # Driving directions and road tips from Delhi, Chandigarh, Shimla
│   ├── faq.ts                         # Master FAQ questions and answers
│   ├── landing-pages.ts               # 11 comprehensive SEO landing page editorial data models
│   ├── blog.ts                        # 3 starter travel articles with rich sections
│   └── redirects.ts                   # 301 legacy URL redirect mapping table
│
├── lib/
│   ├── seo/
│   │   ├── metadata.ts                # Canonical URLs, Open Graph, Twitter cards, geo meta tags
│   │   └── schema.ts                  # Schema.org builders: Resort, FAQPage, HotelRoom, Article
│   ├── actions/
│   │   └── enquiry.ts                 # Server Action for enquiry form with Zod & honeypot
│   └── utils.ts                       # Tailwind merge utility
│
└── public/
    └── images/                        # Structured image folders for your real photographs
        ├── hero/
        ├── rooms/
        ├── gallery/
        └── blog/
```

---

## 🛠️ How to Edit & Maintain Content

You do not need to know React or HTML to modify the website. Simply edit the TypeScript files under `/content/`:

### 1. Updating Business Info & Phone Numbers
Open `content/business.ts`:
- Change `phones` or `displayPhones` to update your contact numbers everywhere on the site (header, footer, sticky bar, schemas).
- Update `whatsapp.number` and `whatsapp.defaultMessage` to customize WhatsApp chat behavior.
- Replace `geo.latitude` and `geo.longitude` with your exact GPS pin from Google Maps.

### 2. Adding or Editing a Room
Open `content/rooms.ts`:
- Modify descriptions, amenities, bed configurations, or pricing placeholders (`{{TODO: ...}}`).
- To add a new room, duplicate an existing room object with a unique `slug`. Next.js will automatically generate its static page (`/rooms/[slug]`), add it to `sitemap.xml`, and update the room dropdown in the enquiry form!

### 3. Adding a New Blog Post
Open `content/blog.ts`:
- Add a new entry to the `blogPosts` array with `slug`, `title`, `excerpt`, `publishedAt`, and structured `content` sections.
- The new article will immediately appear on `/blog`, generate `/blog/[slug]`, and register in `sitemap.xml`.

### 4. Updating Old Platform 301 Redirects
Open `content/redirects.ts`:
- Add old URL paths from your previous website (e.g., `/contact-us`, `/our-rooms.php`) to the `legacyRedirects` array. Next.js will issue permanent 301 redirects, preserving your search ranking equity.

---

## 📸 Replacing Placeholder Images with Real Photos

All placeholder images are located in `/public/images/`. To replace them with real high-resolution photos:

1. **Format**: Convert photos to WebP or optimized JPG.
2. **Naming Convention**:
   - Hero banner: `/public/images/hero/resort-panoramic-view.jpg`
   - Rooms:
     - `/public/images/rooms/deluxe-valley-view.jpg`
     - `/public/images/rooms/premium-balcony-suite.jpg`
     - `/public/images/rooms/family-valley-suite.jpg`
   - Gallery & Attractions:
     - `/public/images/gallery/peach-orchard.jpg`
     - `/public/images/gallery/giri-river.jpg`
     - `/public/images/gallery/baru-sahib.jpg`
     - `/public/images/gallery/churdhar-mountain.jpg`
     - `/public/images/gallery/village-walk.jpg`
     - `/public/images/gallery/stargazing-night.jpg`
3. Update the file paths in `content/rooms.ts`, `content/experiences.ts`, or `app/gallery/page.tsx` if you use `.jpg` or `.png` instead of `.svg`.

---

## 🚀 Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your repository.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL`: `https://splendidviewrajgarh.com` (your custom domain without trailing slash)
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: (Optional) Your Google Search Console HTML tag token
   - `RESEND_API_KEY`: (Optional) Your Resend API key for enquiry email forwarding
5. Click **Deploy**. Vercel will build and deploy the entire static site to global Edge CDN in ~45 seconds.

---

## 🔍 Google Search Console & Sitemap Submission

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your domain property: `https://splendidviewrajgarh.com`.
3. Verify ownership:
   - **DNS Verification (Recommended)**: Add the TXT record to your domain registrar (GoDaddy, Namecheap, Cloudflare).
   - **HTML Tag**: Copy the verification string and add it to your `.env.local` / Vercel Environment Variables as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
4. Go to **Sitemaps** in the left sidebar.
5. Enter `sitemap.xml` in the &quot;Add a new sitemap&quot; field and click **Submit**.
   - Your sitemap URL will be: `https://splendidviewrajgarh.com/sitemap.xml`
6. Google will automatically crawl and index all 25+ core pages, room details, SEO landing pages, and travel guides.
