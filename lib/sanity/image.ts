import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from '@/sanity/env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export type SanityImageSource = Parameters<
  ReturnType<typeof createImageUrlBuilder>['image']
>[0];

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};
