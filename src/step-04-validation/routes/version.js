/**
 * @type {import('fastify').FastifyPluginAsync}
 * */
export default async function users(fastify) {
    fastify.route({
      method: 'GET',
      url: '/version',
      constraints: { version: '1.0.0' },
      handler: async (req, reply) => {
        reply.header('Vary', 'Accept-Version');
        return { version: '1.0.0' }
      },
    })
  }
  