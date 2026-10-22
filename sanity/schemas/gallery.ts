import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Photo Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      initialValue: 'Main Resort Gallery',
      readOnly: true,
      description: 'System identifier for the resort gallery.',
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images (Drag to Reorder)',
      description:
        'Drag and drop images up or down to change the order they appear on the website. Click an image to set focal point (hotspot) or edit alt text.',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text (SEO & Accessibility)',
              type: 'string',
              description: 'Important for Google Image Search and accessibility.',
            }),
            defineField({
              name: 'title',
              title: 'Display Title / Caption (Optional)',
              type: 'string',
              description: 'Optional friendly name or caption.',
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Views & Nature', value: 'views' },
                  { title: 'Rooms & Cottages', value: 'rooms' },
                  { title: 'Dining & Food', value: 'dining' },
                  { title: 'Activities & Bonfire', value: 'activities' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'category',
              media: 'asset',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Untitled photo',
                subtitle: subtitle ? `Category: ${subtitle}` : 'Uncategorized',
                media,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({ title, images }) {
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title: title || 'Photo Gallery',
        subtitle: `${count} image${count === 1 ? '' : 's'}`,
      };
    },
  },
});
