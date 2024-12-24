import buildServer from '../index.js'

import { test } from 'node:test'
import assert from 'node:assert/strict'

test('GET /users', async t => {
  await t.test('should return 200', async t => {
    const server = await buildServer()
    const response = await server.inject({
      method: 'GET',
      url: '/users',
    })
    assert.equal(response.statusCode, 200)
    assert.deepEqual(response.json(), [
      { username: 'alice' },
      { username: 'bob' },
    ])
  })
})
