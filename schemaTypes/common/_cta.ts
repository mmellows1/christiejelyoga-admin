import {Megaphone} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const ctaSchema = defineType({
  title: 'CTA',
  name: 'ctaSchema',
  type: 'object',
  icon: Megaphone,
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection) {
      const {label} = selection
      return {
        title: label || 'CTA',
        media: Megaphone,
      }
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
      type: 'string',
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
