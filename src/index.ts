import RedisClient from '@redis/client/dist/lib/client'
import { createClient } from 'redis'
import { GenericContainer, StartedTestContainer } from 'testcontainers'

describe('GenericContainer', () => {
  let container: StartedTestContainer
  let redisClient: ReturnType<typeof createClient>

  beforeAll(async () => {
    container = await new GenericContainer('redis').withExposedPorts(6379).start()

    redisClient = createClient({
      url: `redis://${container.getHost()}:${container.getMappedPort(6379)}`,
    })
  })

  afterAll(async () => {
    await redisClient.quit()
    await container.stop()
  })

  it('works', async () => {
    await redisClient.set('key', 'val')
    expect(await redisClient.get('key')).toBe('val')
  })
})
