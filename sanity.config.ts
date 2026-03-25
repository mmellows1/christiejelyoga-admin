import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './structure'

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
