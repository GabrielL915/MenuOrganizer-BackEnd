// eslint-disable-next-line @typescript-eslint/no-var-requires
const { envConfig } = require('./src/config/env.config');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: envConfig.database.host,
      port: parseInt(envConfig.database.port, 10),
      user: envConfig.database.user,
      password: envConfig.database.password,
      database: envConfig.database.database,
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString: envConfig.database.connectionString,
      ssl: { rejectUnauthorized: false },
      host: envConfig.database.host,
      port: envConfig.database.port,
      user: envConfig.database.user,
      database: envConfig.database.database,
      password: envConfig.database.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
