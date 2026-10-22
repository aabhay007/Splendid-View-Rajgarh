import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { projectId, dataset, apiVersion } from './sanity/env';
import { schemaTypes } from './sanity/schemas';
import { structure } from './sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Splendid View Rajgarh Studio',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure,
    }),
  ],
});
