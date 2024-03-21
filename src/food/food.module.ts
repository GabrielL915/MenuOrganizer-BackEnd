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

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [
    FoodService,
    FindAllUseCase,
    UpdateUseCase,
    FindOneUseCase,
    DeleteUseCase,
    {
      provide: FoodRepository,
      useClass: FoodRepositoryImpl,
    },
  ],
})
export class FoodModule {}
