async function authenticate(fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: opts.JWT_SECRET,
  })

  fastify.decorateRequest('authenticate', async function (req, res) {
    try {
      await req.jwtVerify()
    } catch (err) {
      throw errors.Unauthorized()
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default authentauthenticateication
