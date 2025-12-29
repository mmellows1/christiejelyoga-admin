import {Mail, Package} from 'lucide-react'
import {defineType} from 'sanity'

export const contactFormSchema = defineType({
  title: 'Contact Form',
  name: 'contactFormBlock',
  type: 'object',
  icon: Mail,
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: heading || 'Contact Form',
        media: Mail,
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
      rows: 3,
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
})
