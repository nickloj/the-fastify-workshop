import buildFastify from './index.js'

const fastify = buildFastify()

const start = async function () {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
