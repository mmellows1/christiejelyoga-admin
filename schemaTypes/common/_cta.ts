import {Megaphone} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const ctaSchema = defineType({
  title: 'CTA',
  name: 'ctaSchema',
  type: 'object',
  icon: Megaphone,
  preview: {
    select: {
      heading: 'heading',
    },
  },
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
      description: 'Make sure its a valid URL',
    }),
    defineField({
      title: 'Open New tab?',
      name: 'newTab',
      description: 'Determines wheter it will open in a new tab',
      type: 'boolean',
    }),
  ],
})
