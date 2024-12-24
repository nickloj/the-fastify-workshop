import type { FastifyRequest, FastifyReply } from 'fastify'
import { JWT } from '@fastify/jwt'

interface QueryResult<T = any> {
  rows: T[]
}

interface PgClient {
  query<T = any>(queryText: unknown): Promise<QueryResult<T>>
}

// Extend FastifyInstance to include our plugins
declare module 'fastify' {
  interface FastifyInstance {}
}

declare module 'fastify' {
  export interface FastifyInstance {
    pg: PgClient
    jwt: JWT
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>
  }
}
