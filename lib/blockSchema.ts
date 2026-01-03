import {LucideIcon} from 'lucide-react'
import {defineField, defineType, type SchemaTypeDefinition, type SchemaField} from 'sanity'
import type {ComponentType} from 'react'

interface BaseBlockProps {
  name: string
  title: string
  icon?: ComponentType
  fields: SchemaField[]
  fieldsets?: SchemaTypeDefinition['fieldsets']
  preview?: SchemaTypeDefinition['preview']
}

interface BaseOptions {
  hasPadding?: boolean
  hasColors?: boolean
  hasAnalytics?: boolean
}

const paddingOptions = [
  {title: 'None', value: 'none'},
  {title: 'Small', value: 'sm'},
  {title: 'Medium', value: 'md'},
  {title: 'Large', value: 'lg'},
]

const createPaddingField = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'string',
    options: {
      list: paddingOptions,
      layout: 'radio',
    },
    initialValue: 'md',
  })

export const paddingField = defineField({
  name: 'padding',
  title: 'Padding',
  type: 'object',
  group: 'layout',
  options: {
    columns: 2,
  },
  fields: [createPaddingField('top', 'Top'), createPaddingField('bottom', 'Bottom')],
  initialValue: {
    top: 'md',
    bottom: 'md',
  },
})

const contentFieldset = {
  name: 'content',
  title: 'Content',
  group: 'content',
  options: {layout: 'tabs', collapsible: true},
}

const layoutFieldset = {
  name: 'layout',
  title: 'Layout',
  group: 'layout',
  options: {layout: 'tabs', collapsible: true},
}

const analyticsFieldset = {
  name: 'analytics',
  title: 'Analytics',
  group: 'analytics',
  options: {layout: 'tabs', collapsible: true},
}

const backgroundField = defineField({
  name: 'background',
  title: 'Background Color',
  type: 'string',
  group: 'layout',
  initialValue: 'transparent',
  options: {
    layout: 'radio',
    list: [
      {title: 'None', value: 'transparent'},
      {title: 'White', value: 'white'},
      {title: 'Brand', value: 'brand'},
    ],
  },
})

const trackClicksField = defineField({
  name: 'trackButtonClicks',
  title: 'Track Button Clicks',
  type: 'boolean',
  group: 'analytics',
  description: 'Enable analytics tracking for buttons in this block',
  initialValue: false,
})

const mergeFieldsets = (
  base: SchemaTypeDefinition['fieldsets'] = [],
  extra: SchemaTypeDefinition['fieldsets'] = [],
) => {
  const map = new Map<string, any>()

  ;[...base, ...extra].forEach((fs) => {
    if (fs?.name && !map.has(fs.name)) {
      map.set(fs.name, fs)
    }
  })

  return Array.from(map.values())
}

export const withBlockSchema = (
  {name, title, icon, fields, fieldsets: userFieldsets = [], ...rest}: BaseBlockProps,
  options: BaseOptions = {},
) => {
  const enhancedFields: SchemaField[] = [
    ...fields.map((field) => ({
      ...field,
      // Only assign content if NO fieldset is defined
      group: field.group ?? 'content',
    })),
    ...(options.hasPadding ? [paddingField] : []),
    ...(options.hasColors ? [backgroundField] : []),
    ...(options.hasAnalytics ? [trackClicksField] : []),
  ]

  const helperFieldsets = [
    contentFieldset,
    ...(options.hasPadding || options.hasColors ? [layoutFieldset] : []),
    ...(options.hasAnalytics ? [analyticsFieldset] : []),
  ]

  const fieldsets = mergeFieldsets(userFieldsets, helperFieldsets)

  return defineType({
    name: `block._${name}`,
    title,
    type: 'object',
    icon,
    fields: enhancedFields,
    groups: [
      {name: 'content', title: 'Content', default: true},
      {name: 'analytics', title: 'Analytics'},
      {name: 'layout', title: 'Layout'},
    ],
    fieldsets,
    ...rest,
  })
}
