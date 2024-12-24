/**
 * @type {import('fastify').FastifyPluginAsync}
 */
export default async function users(fastify) {
  fastify.get('/users', async req => {
    req.log.info('Something important happened!')

    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
