import { Module } from '@nestjs/common';
import { FoodService } from './service/food.service';
import {
  FindAllUseCase,
  FindOneUseCase,
  UpdateUseCase,
  DeleteUseCase,
} from './usecases';
import { FoodController } from './food.controller';
import { FoodRepository } from './repository/food.repository';
import { FoodRepositoryImpl } from './repository/food.repositoryImpl';
import { RedisFoodRepository } from './repository/cache/redis-food.repository';
/* import { RedisService } from 'src/config/redis.service';
 */
@Module({
  imports: [],
  controllers: [FoodController],
  providers: [
    FoodService,
    FindAllUseCase,
    UpdateUseCase,
    FindOneUseCase,
    DeleteUseCase,
    /*     RedisService,
     */ {
      provide: FoodRepository,
      useClass: RedisFoodRepository,
    },
    FoodRepositoryImpl,
  ],
})
export class FoodModule {}
