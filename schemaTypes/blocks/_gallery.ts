import {defineType, defineField} from 'sanity'
import {Icon, Images} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'

export const gallerySchema = withBlockSchema({
  name: 'galleryBlock',
  title: 'Gallery',
  icon: Images,
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection: {images: string[]}) {
      return {
        title: selection.images ? 'Gallery (' + selection.images.length + ' selected)' : 'Gallery',
        media: Images,
      }
    },
  },
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
