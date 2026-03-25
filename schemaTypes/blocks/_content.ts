import {Mail, Text} from 'lucide-react'
import {defineType} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const contentSchema = withBlockSchema(
  {
    title: 'Content',
    name: 'contentBlock',
    icon: Text,
    preview: {
      prepare() {
        return {
          title: 'Content',
          media: Text,
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
        title: 'Alignment',
        name: 'alignment',
        type: 'string',
        initialValue: 'left',
        options: {
          layout: 'radio',
          list: [
            {title: 'Left', value: 'left'},
            {title: 'Center', value: 'center'},
            {title: 'Right', value: 'right'},
            {title: 'Justify', value: 'justify'},
          ],
        },
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
