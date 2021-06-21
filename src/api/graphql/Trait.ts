import { objectType, extendType, nonNull, intArg } from 'nexus'
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
    t.list.nonNull.field('traits', {
      type: 'Trait',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.trait.findMany()
      },
    })
    t.field('traitById', {
      type: 'Trait',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_root, args, ctx) => {
        return ctx.db.trait.findUnique({
          where: { id: args.id },
          include: {
            race: true,
          },
        })
      },
    })
  },
})
