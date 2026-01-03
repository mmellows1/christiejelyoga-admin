import {defineField, defineType} from 'sanity'

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
      type: 'blockSelectionSchema',
    }),
  ],
})
