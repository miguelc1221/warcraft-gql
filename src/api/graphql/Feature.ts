import { objectType, extendType } from 'nexus'
import { Class } from './Class'

export const Feature = objectType({
  name: 'Feature',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.field('class', {
      type: Class,
    })
  },
})

export const FeatureQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('feature', {
      type: 'Feature',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.feature.findMany()
      },
    })
  },
})
