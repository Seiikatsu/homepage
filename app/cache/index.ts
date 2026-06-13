import {env} from '~/utils/env';
import {getOrCreateRedisClient} from './getOrCreateRedisClient';

// Redis is optional: without REDIS_HOST the cache is a no-op (direct fetch every time).
// Any Redis failure degrades gracefully instead of crashing the page.
const cacheEnabled = Boolean(env.REDIS_HOST);

export const getCacheValue = async <T>(key: string): Promise<T | null> => {
  if (!cacheEnabled) {
    return null;
  }
  try {
    const client = await getOrCreateRedisClient();
    const result = await client.get(key);
    if (result !== null) {
      return JSON.parse(result);
    }
  } catch (e) {
    console.error('[cache] read failed, falling back to source', e);
  }
  return null;
};

export const setCacheValue = async (
  key: string,
  data: any,
  ttlInSeconds?: number
): Promise<void> => {
  if (!cacheEnabled) {
    return;
  }
  try {
    const client = await getOrCreateRedisClient();
    if (ttlInSeconds) {
      await client.set(key, JSON.stringify(data), 'EX', ttlInSeconds);
    } else {
      await client.set(key, JSON.stringify(data));
    }
  } catch (e) {
    console.error('[cache] write failed', e);
  }
};
