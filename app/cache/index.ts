import {getOrCreateRedisClient} from './getOrCreateRedisClient';

export const getCacheValue = async <T>(key: string): Promise<T | null> => {
  const client = await getOrCreateRedisClient();
  const result = await client.get(key);
  if (result !== null) {
    return JSON.parse(result);
  }
  return null;
};

export const setCacheValue = async (
  key: string,
  data: any,
  ttlInSeconds?: number
): Promise<void> => {
  const client = await getOrCreateRedisClient();
  if (ttlInSeconds) {
    await client.set(key, JSON.stringify(data), 'EX', ttlInSeconds);
  } else {
    await client.set(key, JSON.stringify(data));
  }
};
