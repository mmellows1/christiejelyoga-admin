import {defineArrayMember, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const portableTextSchema = defineType({
  name: 'portableTextSchema',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      marks: {
        annotations: [
          {
            title: 'CTA Link',
            name: 'cta',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),
  ],
})
