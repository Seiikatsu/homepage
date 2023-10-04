import {z} from 'zod';

const envSchema = z.object({
  MAIL_SERVER_HOST: z.string(),
  MAIL_SERVER_PORT: z.coerce.number().int(),
  MAIL_SERVER_RECEIVER: z.string(),
  MAIL_SERVER_USER: z.string(),
  MAIL_SERVER_PASSWORD: z.string(),
  REDIS_HOST: z.string(),
  REDIS_PORT: z.coerce.number().int(),
  REDIS_PASSWORD: z.string().optional(),
});

export const env = envSchema.parse(process.env);
