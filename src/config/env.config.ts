import * as dotenv from 'dotenv';
import * as path from 'path';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

export const envConfig = {
  database: {
    host: process.env.DEV_HOST || process.env.HOST,
    port: process.env.DEV_PORT || process.env.DBPORT,
    user: process.env.DEV_USER || process.env.USER,
    password: process.env.DEV_PASSWORD || process.env.PASSWORD,
    database: process.env.DEV_DATABASE || process.env.DATABASE,
    connectionString: process.env.CONNECTION_STRING,
  },
};
