import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { FoodRepository } from './repository/food.repository';

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [FoodService, FoodRepository],
})
export class FoodModule {}
