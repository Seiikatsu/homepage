import type {RedisOptions} from 'ioredis';
import Redis from 'ioredis';
import {env} from '~/utils/env';

let redis: Redis | null = null;
export const getOrCreateRedisClient = async (): Promise<Redis> => {
  if (redis === null) {
    redis = await new Promise<Redis>((resolve, reject) => {
      try {
        const options: RedisOptions = {
          host: env.REDIS_HOST,
          port: env.REDIS_PORT,
          password: env.REDIS_PASSWORD,
          lazyConnect: false,
          showFriendlyErrorStack: true,
          enableAutoPipelining: true,
          maxRetriesPerRequest: 0,
        };

        const client = new Redis(options);

        client.on('error', (e: any) => {
          console.error('[Redis] Error connecting', e);
          reject(e);
        });
        client.on('connect', () => {
          console.log('[Redis] connection established.');
          resolve(client);
        });
      } catch (e: any) {
        console.error('[Redis] error initializing redis ', e);
        reject(e);
      }
    });
  }
  return redis!;
};
