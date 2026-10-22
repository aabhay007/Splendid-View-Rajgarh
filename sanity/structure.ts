import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Splendid View Rajgarh Content')
    .items([
      // Singleton Photo Gallery item
      S.listItem()
        .title('Photo Gallery')
        .id('gallery')
        .child(
          S.document()
            .schemaType('gallery')
            .documentId('gallery')
            .title('Photo Gallery Manager')
        ),
      // Filter out 'gallery' from any remaining document lists to prevent duplicates
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'gallery'
      ),
    ]);
