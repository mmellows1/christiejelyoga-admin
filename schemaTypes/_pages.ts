import {defineField, defineType} from 'sanity'
import * as blocks from './blocks'

export const pagesSchema = defineType({
  title: 'Pages',
  name: 'pages',
  type: 'document',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      options: {
        sortable: true,
        insertMenu: {
          filter: true,
          showIcons: true,
          views: [
            {name: 'list'},
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.png`,
            },
          ],
        },
      },
      of: Object.values(blocks).map((block) => ({type: block.name})),
    }),
  ],
})
