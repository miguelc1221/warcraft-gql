import { objectType, extendType, intArg, nonNull } from 'nexus'
import { Trait } from './Trait'
import { Class } from './Class'

export const Race = objectType({
  name: 'Race',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('faction')
    t.string('type')
    t.string('crestSrc')
    t.string('introTitle')
    t.string('introDescription')
    t.string('historyTitle')
    t.string('historyDescription')
    t.string('zoneName')
    t.string('zoneDescription')
    t.string('cityName')
    t.string('cityDescription')
    t.string('mountName')
    t.string('mountDescription')
    t.list.nonNull.field('traits', {
      type: Trait,
    })
    t.list.nonNull.field('classes', {
      type: Class,
    })
  },
})

export const RaceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('races', {
      type: 'Race',
      resolve: (_root, _args, ctx) => {
        return ctx.db.race.findMany({
          include: {
            classes: true,
            traits: {
              include: {
                race: true,
              },
            },
          },
        })
      },
    })
    t.field('raceById', {
      type: 'Race',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_root, args, ctx) => {
        return ctx.db.race.findUnique({
          where: { id: args.id },
          include: {
            traits: true,
            classes: true,
          },
        })
      },
    })
  },
})
