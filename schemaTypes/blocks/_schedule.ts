import {defineType, defineField} from 'sanity'
import {Calendar, Icon} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'

export const scheduleSchema = withBlockSchema(
  {
    name: 'scheduleBlock',
    title: 'Schedule',
    icon: Calendar,
    preview: {
      select: {
        scheduleUrl: 'scheduleUrl',
      },
      prepare() {
        return {
          title: 'Schedule',
          media: Calendar,
        }
      },
    },
    fields: [
      defineField({
        name: 'scheduleUrl',
        title: 'Schedule URL',
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
