import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from '@/sanity/env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Authenticated client for mutations / server actions / migration scripts
export function getSanityWriteClient(token?: string) {
  const writeToken = token || process.env.SANITY_API_WRITE_TOKEN;
  if (!writeToken) {
    throw new Error(
      'Missing SANITY_API_WRITE_TOKEN environment variable required for write operations.'
    );
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: writeToken,
  });
}
