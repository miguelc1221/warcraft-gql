import { FastifyPluginAsync, FastifyReply } from 'fastify'
import { resolve } from 'path'

// Health Check
const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function (_req, reply: FastifyReply) {
    return reply.sendFile('index.html', resolve('docs-site/build'))
  })
}

export default root
