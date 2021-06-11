import { objectType, extendType } from 'nexus'
import { Race } from './Race'

export const Trait = objectType({
  name: 'Trait',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.field('race', {
      type: Race,
    })
  },
})

export const TraitQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('trait', {
      type: 'Trait',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.trait.findMany()
      },
    })
  },
})
