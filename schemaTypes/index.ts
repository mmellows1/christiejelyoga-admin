import {configSchema} from './_config'
import {pagesSchema} from './_pages'
import {servicesSchema} from './_services'
import * as blocks from './blocks'
import * as common from './common'

export const schemaTypes = [
  servicesSchema,
  configSchema,
  pagesSchema,
  ...Object.values(blocks),
  ...Object.values(common),
]
