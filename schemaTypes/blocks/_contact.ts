import {Mail} from 'lucide-react'
import {defineType} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const contactFormSchema = withBlockSchema(
  {
    title: 'Contact Form',
    name: 'contactFormBlock',
    icon: Mail,
    preview: {
      prepare() {
        return {
          title: 'Contact Form',
          media: Mail,
        }
      },
    },
    fields: [
      defineType({
        title: 'Content',
        name: 'content',
        type: 'portableTextSchema',
      }),
      defineType({
        title: 'Image',
        name: 'image',
        type: 'image',
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
