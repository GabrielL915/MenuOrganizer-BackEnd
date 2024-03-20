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

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [
    FoodService,
    FindAllUseCase,
    UpdateUseCase,
    FindOneUseCase,
    DeleteUseCase,
    FoodRepository,
  ],
})
export class FoodModule {}
