import {Icon, Megaphone} from 'lucide-react'
import {defineField, defineType} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const largeCallToActionSchema = withBlockSchema(
  {
    name: 'largeCallToActionBlock',
    title: 'Large Call to Action',
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
  },
  {
    hasAnimation: true,
    hasPadding: true,
    hasColors: true,
    hasAnalytics: true,
  },
)
