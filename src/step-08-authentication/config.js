import S from 'fluent-json-schema'
import envSchema from 'env-schema'
import { join } from 'desm'

const schema = {
  type: 'object',
  required: ['JWT_SECRET'],
  properties: {
    JWT_SECRET: { type: 'string' },
  },
}

export default envSchema({
  schema,
  dotenv: { path: join(import.meta.url, '.env') },
})
