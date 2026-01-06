import {Package} from 'lucide-react'
import {defineType, Rule} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const servicesSchema = withBlockSchema(
  {
    title: 'Services',
    name: 'servicesBlock',
    icon: Package,
    preview: {
      select: {
        heading: 'heading',
      },
      prepare({heading}: {heading?: string}) {
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
        of: [
          {
            type: 'reference',
            to: [
              {
                type: 'services',
                to: [{type: 'services'}],
                options: {
                  filter: '_id in path("drafts.**") == false', // only published
                },
              },
            ],
          },
        ],
        validation: (Rule: Rule) => Rule.required().min(1),
      },
    ],
  },
  {
    hasAnimation: true,
    hasPadding: true,
    hasColors: true,
    hasAnalytics: true,
  },
)
