import { makeSchema } from 'nexus'
import { resolve } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: resolve('__generated/nexus.ts'),
    schema: resolve('__generated/schema.graphql'),
  },
  contextType: {
    module: resolve('src/api/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    headers: ['// @ts-nocheck'],
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  prettierConfig: resolve('.prettierrc'),
})
