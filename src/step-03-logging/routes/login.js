import S from 'fluent-json-schema'

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required().minLength(6)),
}

export default async function login(fastify) {
  fastify.post('/login', { schema }, req => {
    req.log.info('Login route called')
    const { username, password } = req.body
    return {
      username,
      password,
    }
  })
}
