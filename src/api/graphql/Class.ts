import { objectType, extendType, nonNull, intArg } from 'nexus'
import { Race } from './Race'
import { Specialization } from './Specialization'
import { Feature } from './Feature'

export const Class = objectType({
  name: 'Class',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('crestSrc')
    t.string('introTitle')
    t.string('introDescription')
    t.string('info')
    t.list.nonNull.string('combatRoles')
    t.list.nonNull.string('resources')
    t.list.nonNull.string('armorType')
    t.list.nonNull.string('weapons')
    t.list.nonNull.field('specializations', {
      type: Specialization,
    })
    t.list.nonNull.field('features', {
      type: Feature,
    })
    t.list.nonNull.field('races', {
      type: Race,
    })
  },
})

export const ClassQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('classes', {
      type: 'Class',
      resolve: (_root, _args, ctx) => {
        return ctx.db.class.findMany({
          include: {
            races: true,
            features: true,
            specializations: true,
          },
        })
      },
    })
    t.field('classById', {
      type: 'Class',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_root, args, ctx) => {
        return ctx.db.class.findUnique({
          where: { id: args.id },
          include: {
            races: true,
            features: true,
            specializations: true,
          },
        })
      },
    })
  },
})
