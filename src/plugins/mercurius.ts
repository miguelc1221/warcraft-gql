import fp from 'fastify-plugin'
import mercurius, { MercuriusCommonOptions } from 'mercurius'
import { schema } from '../api/schema'
import { context } from '../api/context'

/**
 * GraphQL adapter for Fastify
 *
 * @see https://github.com/mercurius-js/mercurius
 */
export default fp<MercuriusCommonOptions>(async (fastify) => {
  fastify.register(mercurius, {
    schema,
    graphiql: false,
    ide: false,
    path: '/graphql',
    context: () => context,
  })
})
