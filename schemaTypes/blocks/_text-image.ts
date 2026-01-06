import {defineType, Rule} from 'sanity'
import {Text} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'

export const textImageSchema = withBlockSchema(
  {
    title: 'Text/Media',
    name: 'textMediaBlock',
    icon: Text,
    preview: {
      prepare() {
        return {
          title: 'Text/Media',
          media: Text,
        }
      },
    },
    fields: [
      defineType({
        title: 'Image',
        name: 'image',
        type: 'image',
      }),
      defineType({
        title: 'Image on left?',
        description: 'Determines whether the image sits on the left or right',
        name: 'imageFirst',
        type: 'boolean',
      }),
      defineType({
        title: 'Text',
        name: 'content',
        type: 'portableTextSchema',
      }),
    ],
  },
  {
    hasAnimation: true,
    hasPadding: true,
    hasColors: true,
  },
)
