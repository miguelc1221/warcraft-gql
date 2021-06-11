import { objectType, extendType } from 'nexus'
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
    t.list.field('traits', {
      type: Trait,
    })
    t.list.field('classes', {
      type: Class,
    })
  },
})

export const RaceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('race', {
      type: 'Race',
      resolve: (_root, _args, ctx) => {
        return ctx.db.race.findMany({
          include: {
            traits: true,
            classes: true,
          },
        })
      },
    })
  },
})
