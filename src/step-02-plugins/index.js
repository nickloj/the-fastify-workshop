import Fastify from 'fastify'

function buildServer() {
  const fastify = Fastify({
    logger: true,
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
  })

  fastify.register(import('./routes/users.js'))

  return fastify
}

export default buildServer
