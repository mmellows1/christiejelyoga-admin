import {configSchema} from './_config'
import {pagesSchema} from './_pages'
import {servicesSchema} from './_services'
import * as blocks from './blocks'

export const schemaTypes = [servicesSchema, configSchema, pagesSchema, ...Object.values(blocks)]
