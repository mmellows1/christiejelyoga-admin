import {defineArrayMember, defineConfig, defineField, defineType} from 'sanity'

export const servicesSchema = defineType({
  title: 'Services',
  name: 'services',
  type: 'document',
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
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
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      rows: 2,
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
