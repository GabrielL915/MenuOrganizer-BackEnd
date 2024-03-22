import { Injectable } from '@nestjs/common';
import { UpdateFoodDto, FoodResponseDto, UpdateFoodResponseDto } from '../dto';
import {
  mapToFoodResponseDtoArray,
  mapToFoodResponseDto,
} from '../mappers/food.mappers';
import { FoodRepository } from '../repository/food.repository';
import { DayOfWeek } from '../value-objects/day-of-week';
import { Result, ok, err } from 'src/shared';
@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  async findAll(): Promise<Result<FoodResponseDto[], Error>> {
    try {
      const data = await this.foodRepository.findAll();
      const response = mapToFoodResponseDtoArray({ value: data });
      return ok(response);
    } catch (error) {
      return err(error.message);
    }
  }

  async findOne(id: string): Promise<Result<FoodResponseDto, Error>> {
    try {
      const data = await this.foodRepository.findOne(id);
      const response = mapToFoodResponseDto({ value: data });
      return ok(response);
    } catch (error) {
      return err(error.message);
    }
  }

  async update(
    id: string,
    updateFoodDto: UpdateFoodDto,
  ): Promise<Result<UpdateFoodResponseDto, Error>> {
    try {
      const meals = updateFoodDto.meals.map((meal) => ({
        ...meal,
        day_of_week: DayOfWeek.create(meal.day_of_week),
      }));

      const foodEntity = {
        meals: meals,
      };
      const data = await this.foodRepository.update(id, foodEntity);
      return ok(data);
    } catch (error) {
      return err(error.message);
    }
  }

  async delete(id: string): Promise<Result<FoodResponseDto, Error>> {
    try {
      const data = await this.foodRepository.delete(id);
      const response = mapToFoodResponseDto({ value: data });
      return ok(response);
    } catch (error) {
      return err(error.message);
    }
  }
}
