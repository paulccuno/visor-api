import * as dotenv from 'dotenv';
import * as Joi from 'joi';

export enum Environment {
  local = 'local',
  development = 'development',
  staging = 'staging',
  production = 'production',
  test = 'test',
}

dotenv.config({ path: `.env.${process.env.NODE_ENV || Environment.local}` });

interface IEnvironmentConfig {
  NODE_ENV: Environment;
  PORT: number;
  DATABASE_URL: string;
}

const validationSchemaConfig = Joi.object({
  NODE_ENV: Joi.string()
    .valid(...Object.values(Environment))
    .required()
    .default(Environment.local),
  PORT: Joi.number().required(),
  DATABASE_URL: Joi.string().required(),
}).unknown(true);

const { error, value } = validationSchemaConfig.validate(process.env, {
  abortEarly: false,
});

if (error) {
  const errorMessage = error.details.map((detail) => detail.message).join(', ');
  console.error(`Config validation error: ${errorMessage}`);
  throw new Error(`Config validation error: ${errorMessage}`);
}

export const EnvironmentConfig: IEnvironmentConfig = value;
