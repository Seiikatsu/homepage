import nodemailer from 'nodemailer';
import {env} from '~/utils/env';

const smtpConfig = {
  host: env.MAIL_SERVER_HOST,
  port: env.MAIL_SERVER_PORT,
  secure: true,
  auth: {
    user: env.MAIL_SERVER_USER,
    pass: env.MAIL_SERVER_PASSWORD,
  },
};

export const mailTransport = nodemailer.createTransport(smtpConfig);
