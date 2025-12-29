import {defineField, defineType} from 'sanity'

export const configSchema = defineType({
  title: 'Config',
  name: 'config',
  type: 'object',

  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'image',
    }),
    defineField({
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'pages'}],
        },
      ],
    }),
    defineField({
      title: 'CTAs',
      name: 'ctas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Label',
              name: 'label',
              type: 'string',
            }),
            defineField({
              title: 'Href',
              name: 'href',
              type: 'url',
            }),
            defineField({
              title: 'New Tab',
              name: 'newTab',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
  ],
})
