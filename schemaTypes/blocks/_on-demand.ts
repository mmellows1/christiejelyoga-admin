import {PlayIcon} from 'lucide-react'
import {defineField, defineType} from 'sanity'
import {withBlockSchema} from '../../lib/blockSchema'

export const onDemandSchema = withBlockSchema(
  {
    name: 'onDemandBlock',
    title: 'On Demand',
    icon: PlayIcon,
    preview: {
      select: {
        heading: 'heading',
      },
      prepare(selection: {heading?: string}) {
        const {heading} = selection
        return {
          title: heading || 'On demand',
          media: PlayIcon,
        }
      },
    },
    fields: [
      defineField({
        name: 'content',
        title: 'Content',
        type: 'portableTextSchema',
      }),
      defineField({
        name: 'videoId',
        title: 'Video ID',
        type: 'string',
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
