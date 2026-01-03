import {defineType} from 'sanity'
import * as blocks from '../blocks'

export const blockSelectionSchema = defineType({
  name: 'blockSelectionSchema',
  type: 'array',
  title: 'Block Selection',
  of: Object.values(blocks).map((block) => ({type: block.name})),
  options: {
    sortable: true,
    insertMenu: {
      filter: true,
      showIcons: true,
      views: [
        {name: 'list'},
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.png`,
        },
      ],
    },
  },
})
