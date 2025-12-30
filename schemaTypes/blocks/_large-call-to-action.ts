import {Icon, Megaphone} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const largeCallToActionSchema = defineType({
  name: 'largeCallToActionBlock',
  title: 'Large Call to Action',
  type: 'object',
  icon: Megaphone,
  preview: {
    select: {
      label: 'label',
    },
    prepare(selection: {label?: string}) {
      const {label} = selection
      return {
        title: label || 'Large Call to Action',
        media: Megaphone,
      }
    },
  },
  fields: [
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'ctaSchema',
    }),
  ],
})
