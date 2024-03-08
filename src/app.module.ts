import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { KnexModule } from 'nestjs-knex';
import { envConfig } from './config/env.config';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        useNullAsDefault: true,
        connection:
          process.env.NODE_ENV === 'production'
            ? {
                connectionString: envConfig.database.connectionString,
                ssl: { rejectUnauthorized: false },
                host: envConfig.database.host,
                port: parseInt(envConfig.database.port, 10),
                user: envConfig.database.user,
                database: envConfig.database.database,
                password: envConfig.database.password,
              }
            : {
                host: envConfig.database.host,
                port: parseInt(envConfig.database.port, 10),
                user: envConfig.database.user,
                password: envConfig.database.password,
                database: envConfig.database.database,
              },
      },
    }),
    FoodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
