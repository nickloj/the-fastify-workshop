import errors from 'http-errors'
import S from 'fluent-json-schema'
import SQL from '@nearform/sql'
import { Type, Static } from '@sinclair/typebox'
import { FastifyInstance, FastifyRequest } from 'fastify'

const BodySchema = Type.Object({
  username: Type.String(),
  password: Type.String(),
})

type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Object({
  token: Type.String(),
})

type ResponseSchema = Static<typeof ResponseSchema>

const schema = {
  body: BodySchema,
  response: {
    200: ResponseSchema,
  },
}

export default async function login(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    { schema },
    async (req: FastifyRequest<{ Body: BodySchema }>) => {
      const { username, password } = req.body

      // sample auth check
      if (username !== password) {
        throw errors.Unauthorized()
      }

      const {
        rows: [user],
      } = await fastify.pg.query(
        SQL`SELECT id, username FROM users WHERE username = ${username}`,
      )

      if (!user) {
        throw errors.Unauthorized()
      }

      return { token: fastify.jwt.sign({ username }) }
    },
  )
}
