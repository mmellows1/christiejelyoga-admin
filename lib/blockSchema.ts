import {LucideIcon} from 'lucide-react'
import {defineField, defineType, TypedObject} from 'sanity'

interface BaseBlockProps extends TypedObject {
  name: string
  title: string
  fields: any
  icon: LucideIcon
}

interface BaseOptions {
  hasPadding: boolean
  hasColors: boolean
}
export const withBlockSchema = (
  {name, title, icon, fields, ...rest}: BaseBlockProps,
  {hasPadding, hasColors}: BaseOptions,
) => {
  return defineType({
    name: 'block._' + name,
    type: 'object',
    icon,
    title,
    fields,
    ...rest,
  })
}
