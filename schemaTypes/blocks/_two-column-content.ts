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
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 2,
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
