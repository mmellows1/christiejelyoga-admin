import {Package} from 'lucide-react'
import {defineType} from 'sanity'

export const servicesSchema = defineType({
  title: 'Services',
  name: 'servicesBlock',
  type: 'object',
  icon: Package,
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: heading || 'Services',
        media: Package, // 👈 force icon instead of image
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
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'services'}]}],
      validation: (Rule) => Rule.required(),
    },
  ],
})
