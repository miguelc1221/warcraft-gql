import { objectType, extendType } from 'nexus'
import { Class } from './Class'

export const Specialization = objectType({
  name: 'Specialization',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('description')
    t.field('class', {
      type: Class,
    })
  },
})

export const SpecializationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('specialization', {
      type: 'Specialization',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.specialization.findMany()
      },
    })
  },
})
