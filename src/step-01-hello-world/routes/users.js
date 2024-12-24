export default async function users(fastify) {
  fastify.get('/users', async () => ['user1', 'user2'])
}
