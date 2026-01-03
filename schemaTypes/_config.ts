import {defineField, defineType} from 'sanity'

export const configSchema = defineType({
  title: 'Config',
  name: 'config',
  type: 'document',

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
      title: 'Momo Yoga Schedule URL',
      name: 'momoYogaScheduleUrl',
      type: 'url',
    }),
    defineField({
      title: 'Frontpage',
      name: 'frontpage',
      type: 'reference',
      to: [{type: 'pages'}],
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
      title: 'Calls to Actions',
      description: 'Displayed in the navigation bar at the top',
      name: 'ctas',
      type: 'array',
      of: [
        {
          type: 'ctaSchema',
          preview: {
            select: {
              label: 'label',
            },
            prepare(selection) {
              const {label} = selection
              return {
                title: 'Call to Action',
              }
            },
          },
        },
      ],
    }),
  ],
})
