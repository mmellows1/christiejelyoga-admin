import {Megaphone} from 'lucide-react'
import {defineType} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const callToActionBannerSchema = withBlockSchema(
  {
    title: 'Call to action banner',
    name: 'callToActionBannerBlock',
    icon: Megaphone,
    preview: {
      select: {
        heading: 'heading',
      },
      prepare({heading}) {
        return {
          title: heading || 'Call to action banner',
          media: Megaphone,
        }
      },
    },
    fields: [
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        rows: 4,
      },
      {
        title: 'CTA click',
        name: 'cta',
        type: 'ctaSchema',
      },
    ],
  },
  {
    hasAnimation: true,
    hasAnalytics: true,
    hasPadding: true,
    hasColors: true,
  },
)
