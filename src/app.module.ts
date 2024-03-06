import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { KnexModule } from 'nestjs-knex';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'pguser',
          password: 'pgpassword',
          database: 'food_db',
        },
      },
    }),
    FoodModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
