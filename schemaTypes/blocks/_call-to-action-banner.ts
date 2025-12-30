import {Megaphone} from 'lucide-react'
import {defineType} from 'sanity'

export const callToActionBannerSchema = defineType({
  title: 'Call to action banner',
  name: 'callToActionBannerBlock',
  type: 'object',
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
  fieldsets: [
    {
      name: 'link',
      title: 'CTA Link',
      options: {collapsible: true, collapsed: true},
    },
  ],
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
      fieldset: 'link',
      type: 'ctaSchema',
    },
  ],
})
