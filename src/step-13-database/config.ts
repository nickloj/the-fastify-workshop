import S from 'fluent-json-schema'
import envSchema from 'env-schema'
import { join } from 'path'

const schema = S.object()
  .prop('JWT_SECRET', S.string().required())
  .prop('LOG_LEVEL', S.string().default('info'))
  .prop('PRETTY_PRINT', S.string().default(true))
  .prop('PG_CONNECTION_STRING', S.string().required())
  .valueOf()

export interface EnvConfig {
  JWT_SECRET: string
  LOG_LEVEL: string
  PRETTY_PRINT: boolean
  PG_CONNECTION_STRING: string
}

export default envSchema<EnvConfig>({
  schema,
  dotenv: { path: join(__dirname, '.env') },
})
