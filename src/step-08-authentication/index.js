import Fastify from 'fastify'

function buildServer(config) {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  fastify.register(import('@fastify/jwt'), {
    secret: config.JWT_SECRET,
  })
  fastify.register(import('./routes/login.js'))
  fastify.register(import('./routes/users.js'))

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
