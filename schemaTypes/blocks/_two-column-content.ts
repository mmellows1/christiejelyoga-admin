import {defineField, defineType} from 'sanity'
import {Columns2} from 'lucide-react'
import {withBlockSchema} from '../../lib/blockSchema'

export const twoColumnContentSchema = withBlockSchema(
  {
    name: 'twoColumnContentBlock',
    title: 'Two Column Content',
    icon: Columns2,
    preview: {
      select: {
        heading: 'heading',
      },
      prepare(selection: {heading?: string}) {
        const {heading} = selection
        return {
          title: heading || 'Two Column Content',
          media: Columns2,
        }
      },
    },
    fields: [
      defineField({
        name: 'leftContent',
        title: 'Left Content',
        type: 'array',
        group: 'content',
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                  title: 'CTA Link',
                  name: 'cta',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      defineField({
        name: 'rightContent',
        title: 'Right Content',
        type: 'array',
        group: 'content',
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                  title: 'Call to Action button',
                  name: 'cta',
                  type: 'object',
                  fields: [
                    {
                      title: 'URL',
                      name: 'href',
                      type: 'url',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
          },
        ],
      }),
      defineField({
        name: 'layout',
        title: 'Layout',
        type: 'string',
        group: 'layout',
        options: {
          layout: 'radio',
          list: [
            {title: 'Equal (50% / 50%)', value: '6-6'},
            {title: 'Left Narrow / Right Wide (33% / 66%)', value: '4-8'},
            {title: 'Equal spaced (37.5% / 25% / 37.5%)', value: '5-2-5'},
          ],
        },
        initialValue: '6-6',
      }),
      defineField({
        title: 'Call to action',
        name: 'cta',
        type: 'ctaSchema',
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
