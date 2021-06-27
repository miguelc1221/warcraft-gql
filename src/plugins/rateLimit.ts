import fp from 'fastify-plugin'
import FastifyRateLimit, { FastifyRateLimitOptions } from 'fastify-rate-limit'

/**
 * Rate limiter for routes
 *
 * @see https://github.com/fastify/fastify-rate-limit
 */
export default fp<FastifyRateLimitOptions>(async (fastify) => {
  return fastify.register(FastifyRateLimit, {
    max: 100,
  })
})
