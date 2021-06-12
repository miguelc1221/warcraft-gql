import { FastifyPluginAsync } from 'fastify'

// Health Check
const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function () {
    return { up: true }
  })
}

export default root
