import fp from 'fastify-plugin'
import fastifyCors, { FastifyCorsOptions } from 'fastify-cors'

/**
 * Plugin for CORS
 *
 * @see https://github.com/fastify/fastify-cors
 */
export default fp<FastifyCorsOptions>(async (fastify) => {
  return fastify.register(fastifyCors)
})
