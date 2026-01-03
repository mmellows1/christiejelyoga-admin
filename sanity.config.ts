import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './structure'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'

const locations = {
  pages: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title ?? 'Page',
          href: `/${doc?.slug}`,
        },
      ],
    }),
  }),
}

const mainDocuments = defineDocuments([
  {
    route: '/:slug',
    filter: `_type == "pages" && slug.current == $slug`,
  },
  {
    route: '/',
    filter: `_type == "pages" && _id == *[_type=="config"][0].frontpage._ref`,
  },
])

export default defineConfig({
  name: 'default',
  title: 'christiejelyoga',

  projectId: 'o854dk5q',
  dataset: 'production',

  plugins: [
    presentationTool({
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      allowOrigins: ['http://localhost:*'],
      resolve: {locations, mainDocuments},
    }),
    deskStructure(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
