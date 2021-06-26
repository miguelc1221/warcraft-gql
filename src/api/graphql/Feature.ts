import { objectType, extendType, nonNull, intArg } from 'nexus'
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
    t.list.nonNull.field('features', {
      type: 'Feature',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.feature.findMany({
          include: {
            class: true,
          },
        })
      },
    })
    t.field('featureById', {
      type: 'Feature',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_root, args, ctx) => {
        return ctx.db.feature.findUnique({
          where: { id: args.id },
          include: {
            class: true,
          },
        })
      },
    })
  },
})
