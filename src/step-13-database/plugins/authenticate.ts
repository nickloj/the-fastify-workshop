import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify'
import fastifyJwt from '@fastify/jwt'

async function authenticate(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
): Promise<void> {
  fastify.register(fastifyJwt, { secret: opts.JWT_SECRET })
  fastify.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    },
  )
}

export default authenticate
