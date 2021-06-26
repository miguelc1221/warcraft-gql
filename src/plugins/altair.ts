import fp from 'fastify-plugin'
import AltairFastify, {
  AltairFastifyPluginOptions,
} from 'altair-fastify-plugin'

/**
 * Fully featured GraphQL Client IDE
 *
 * @see https://github.com/imolorhe/altair/tree/staging/packages/altair-fastify-plugin
 */
export default fp<AltairFastifyPluginOptions>(async (fastify) => {
  fastify.register(AltairFastify, {
    path: '/playground',
    baseURL: '/playground/',
    endpointURL: '/graphql', // 'endpointURL' should be the same as the mercurius 'path'
  })
})
