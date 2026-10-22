import { sanityClient } from './client';

export interface SanityGalleryImage {
  _key: string;
  alt?: string;
  title?: string;
  category?: string;
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
      lqip?: string;
    };
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanityGalleryDoc {
  title?: string;
  images?: SanityGalleryImage[];
}

export const galleryQuery = `*[_type == "gallery" && (_id == "gallery" || _id == "drafts.gallery")][0] {
  title,
  images[] {
    _key,
    alt,
    title,
    category,
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height,
          aspectRatio
        },
        lqip
      }
    },
    hotspot,
    crop
  }
}`;

export async function fetchGalleryFromSanity(): Promise<SanityGalleryImage[] | null> {
  try {
    const data = await sanityClient.fetch<SanityGalleryDoc>(
      galleryQuery,
      {},
      {
        next: {
          revalidate: 60, // Fallback revalidate every 60s + instant on-demand via webhook
          tags: ['gallery'],
        },
      }
    );

    if (data && Array.isArray(data.images) && data.images.length > 0) {
      return data.images;
    }
    return null;
  } catch (error) {
    console.warn(
      'Could not fetch gallery from Sanity CMS, falling back to local images:',
      error
    );
    return null;
  }
}
