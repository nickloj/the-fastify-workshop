import Fastify from 'fastify'
import usersRoute from './routes/users.js'

function buildFastify() {
  const fastify = Fastify()
  fastify.register(usersRoute)
  return fastify
}

export default buildFastify
