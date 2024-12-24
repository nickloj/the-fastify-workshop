import SQL from '@nearform/sql'
import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array().items(
      S.object()
        .prop('username', S.string().required())
        .prop('id', S.integer().required()),
    ),
  },
}

export default async function users(fastify) {
  fastify.get('/', { schema }, async req => {
    const { rows } = await fastify.pg.query(
      SQL`SELECT id, username FROM users`,
    )
    return rows
  })
}
