import {Quote} from 'lucide-react'
import {defineType} from 'sanity'

export const sloganSchema = defineType({
  title: 'Slogan',
  name: 'sloganBlock',
  type: 'object',
  icon: Quote,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Slogan',
      name: 'slogan',
      type: 'text',
    },
    {
      title: 'CTA',
      name: 'cta',
      type: 'object',
      fields: [
        {
          title: 'Label',
          name: 'label',
          type: 'string',
        },
        {
          title: 'Link',
          name: 'href',
          type: 'url',
        },
        {
          title: 'Open New tab?',
          name: 'newTab',
          description: 'Determines wheter it will open in a new tab',
          type: 'boolean',
        },
      ],
    },
  ],
})
