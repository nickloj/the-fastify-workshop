export default async function user(fastify) {
  fastify.get(
    '/user',
    { onRequest: [fastify.authenticate] },
    async req => req.user,
  )
}
