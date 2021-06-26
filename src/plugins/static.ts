import fp from 'fastify-plugin'
import fastifyStatic, { FastifyStaticOptions } from 'fastify-static'
import { resolve } from 'path'

/**
 * Plugin for serving static files as fast as possible.
 *
 * @see https://github.com/fastify/fastify-static
 */
export default fp<FastifyStaticOptions>(async (fastify) => {
  return fastify.register(fastifyStatic, {
    root: resolve('docs-site/build'),
    redirect: true,
    decorateReply: false, // fastify-altair uses fastifyStatic, so we need to remove this Reply decorator
  })
})
