import {MousePointer2} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'
import {defineField} from 'sanity'

export const testSchema = withBlockSchema(
  {
    name: 'cta',
    title: 'CTA',
    icon: MousePointer2,
    fields: [
      defineField({
        name: 'button',
        type: 'string',
      }),
    ],
  },
  {
    trackButtonClicks: true,
    hasColors: true,
    hasPadding: true,
  },
)
