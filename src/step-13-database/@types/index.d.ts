import type { FastifyRequest, FastifyReply } from 'fastify'
import { JWT } from '@fastify/jwt'
import type { PgClient } from '@fastify/postgres'

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
