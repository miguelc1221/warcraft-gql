import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  // Set to false because we generate when running npm run dev
  // due to using tsc to compile instead of ts-node-dev
  shouldGenerateArtifacts: !!process.env.GENERATE_ARTIFACTS,
  outputs: {
    typegen: join(__dirname, '../../__generated/nexus.ts'),
    schema: join(__dirname, '../../__generated/schema.graphql'),
  },
  contextType: {
    module: join(__dirname, `./context.ts`),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  prettierConfig: join(__dirname, '../../.prettierrc'),
})
