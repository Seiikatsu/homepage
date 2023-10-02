import {z} from 'zod';

const envSchema = z.object({
  MAIL_SERVER_HOST: z.string(),
  MAIL_SERVER_PORT: z.coerce.number(),
  MAIL_SERVER_RECEIVER: z.string(),
  MAIL_SERVER_USER: z.string(),
  MAIL_SERVER_PASSWORD: z.string(),
});

export const env = envSchema.parse(process.env);
