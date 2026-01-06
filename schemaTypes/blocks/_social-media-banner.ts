import {defineType, defineField} from 'sanity'
import {Icon, Instagram} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'

export const socialMediaBannerSchema = withBlockSchema(
  {
    name: 'socialMediaBannerBlock',
    title: 'Social Media Banner',
    icon: Instagram,
    preview: {
      select: {
        heading: 'heading',
      },
      prepare(selection: {heading?: string}) {
        const {heading} = selection
        return {
          title: heading || 'SocialMediaBanner',
          media: Instagram,
        }
      },
    },
    fields: [
      defineField({
        name: 'heading',
        title: 'Heading',
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
