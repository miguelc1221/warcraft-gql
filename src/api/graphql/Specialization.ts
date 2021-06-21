import { objectType, extendType, nonNull, intArg } from 'nexus'
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
    t.list.nonNull.field('specializations', {
      type: 'Specialization',
      resolve: async (_root, _args, ctx) => {
        return await ctx.db.specialization.findMany()
      },
    })
    t.field('specializationById', {
      type: 'Specialization',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_root, args, ctx) => {
        return ctx.db.specialization.findUnique({
          where: { id: args.id },
          include: {
            class: true,
          },
        })
      },
    })
  },
})
