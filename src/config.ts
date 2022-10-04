import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const envValidation = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});

export default registerAs('config', () => {
  return {
    database: {
      dbHost: process.env.DB_HOST,
      dbPort: process.env.DB_PORT,
      dbUsername: process.env.DB_USERNAME,
      dbPassword: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    },
  };
});
