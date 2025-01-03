import { join } from 'desm'
import Fastify from 'fastify'
import autoload from '@fastify/autoload'
import postgres from '@fastify/postgres'

function buildServer(config) {
  const opts = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
      ...(config.PRETTY_PRINT && {
        transport: {
          target: 'pino-pretty',
        },
      }),
    },
  }

  const fastify = Fastify(opts)

  fastify.register(postgres, {
    connectionString: opts.PG_CONNECTION_STRING,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'plugins'),
    options: opts,
  })

  fastify.register(autoload, {
    dir: join(import.meta.url, 'routes'),
    options: opts,
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export default buildServer
