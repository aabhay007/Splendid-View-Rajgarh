export interface LegacyRedirect {
  source: string;
  destination: string;
  permanent: boolean;
}

/**
 * 301 Legacy URL Redirect Mapping
 * If your prior website was hosted on WordPress, Wix, or another platform,
 * add old URL paths below to preserve backlink juice and search rankings.
 * All paths must start with a slash '/'.
 */
export const legacyRedirects: LegacyRedirect[] = [
  // Examples of typical legacy patterns to preserve ranking:
  {
    source: "/index.html",
    destination: "/",
    permanent: true,
  },
  {
    source: "/home",
    destination: "/",
    permanent: true,
  },
  {
    source: "/contact-us",
    destination: "/contact",
    permanent: true,
  },
  {
    source: "/about-us",
    destination: "/about",
    permanent: true,
  },
  {
    source: "/our-rooms",
    destination: "/rooms",
    permanent: true,
  },
  {
    source: "/facilities",
    destination: "/amenities",
    permanent: true,
  },
  {
    source: "/photos",
    destination: "/gallery",
    permanent: true,
  },
  {
    source: "/location",
    destination: "/how-to-reach",
    permanent: true,
  },
  // Legacy room category redirects to unified cottage page
  {
    source: "/rooms/deluxe-valley-view-room",
    destination: "/rooms/valley-view-cottage",
    permanent: true,
  },
  {
    source: "/rooms/premium-balcony-suite",
    destination: "/rooms/valley-view-cottage",
    permanent: true,
  },
  {
    source: "/rooms/family-valley-suite",
    destination: "/rooms/valley-view-cottage",
    permanent: true,
  },
  // Add any specific old blog posts or WordPress category URLs here:
  // {
  //   source: "/old-blog-post-slug",
  //   destination: "/blog/old-blog-post-slug",
  //   permanent: true,
  // },
];
