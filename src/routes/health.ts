import { FastifyPluginAsync } from 'fastify'

// Health Check
const health: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/health', async function () {
    return { up: true }
  })
}

export default health
