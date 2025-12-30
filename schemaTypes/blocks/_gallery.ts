import {defineType, defineField} from 'sanity'
import {Icon, Images} from 'lucide-react'

export const gallerySchema = defineType({
  name: 'galleryBlock',
  title: 'Gallery',
  type: 'object',
  icon: Images,
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection: {images: string[]}) {
      return {
        title: 'Gallery (' + selection.images.length + ')',
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
    // Add more fields here
  ],
})
