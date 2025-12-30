import {PlayIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const onDemandSchema = defineType({
  name: 'onDemandBlock',
  title: 'On Demand',
  type: 'object',
  icon: PlayIcon,
  preview: {
    select: {
      heading: 'heading',
    },
    prepare(selection: {heading?: string}) {
      const {heading} = selection
      return {
        title: heading || 'OnDemand',
        media: PlayIcon,
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
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      fieldset: 'link',
      type: 'ctaSchema',
    }),
  ],
})
