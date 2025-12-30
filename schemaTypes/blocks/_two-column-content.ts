import {defineType, defineField} from 'sanity'
import {Columns2, Icon} from 'lucide-react'

export const twoColumnContentSchema = defineType({
  name: 'twoColumnContentBlock',
  title: 'Two Column Content',
  type: 'object',
  icon: Columns2,
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection: {heading?: string}) {
      const {heading} = selection
      return {
        title: heading || 'TwoColumnContent',
        media: Columns2,
      }
    },
  },
  fields: [
    defineField({
      name: 'leftContent',
      title: 'Left Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'rightContent',
      title: 'Right Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Equal (50% / 50%)', value: '6-6'},
          {title: 'Left Narrow / Right Wide (33% / 66%)', value: '4-8'},
          {title: 'Equal spaced (37.5% / 25% / 37.5%)', value: '5-2-5'},
        ],
      },
    }),
    defineField({
      title: 'CTA',
      name: 'cta',
      type: 'object',
      fields: [
        defineField({
          title: 'Label',
          name: 'label',
          type: 'string',
        }),
        defineField({
          title: 'Link',
          name: 'href',
          type: 'url',
        }),
        defineField({
          title: 'Open New tab?',
          name: 'newTab',
          description: 'Determines wheter it will open in a new tab',
          type: 'boolean',
        }),
      ],
    }),
  ],
})
