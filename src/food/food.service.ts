import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodRepository } from './repository/food.repository';
import { DayOFWeek } from './value-objects/day-of-week';
@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}
  async create(createFoodDto: CreateFoodDto) {
    try {
      const meals = createFoodDto.meals.map((meal) => ({
        ...meal,
        day_of_week: DayOFWeek.create(meal.day_of_week),
      }));

      const foodEntity = {
        ...createFoodDto,
        meals: meals.map((meal) => ({
          day_of_week: meal.day_of_week,
          lunch: meal.lunch,
          dinner: meal.dinner,
        })),
      };

      return await this.foodRepository.create(foodEntity);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      return await this.foodRepository.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.foodRepository.findOne(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    try {
      const meals = updateFoodDto.meals.map((meal) => ({
        ...meal,
        day_of_week: DayOFWeek.create(meal.day_of_week),
      }));

      const foodEntity = {
        ...updateFoodDto,
        meals: meals.map((meal) => ({
          day_of_week: meal.day_of_week,
          lunch: meal.lunch,
          dinner: meal.dinner,
        })),
      };

      return await this.foodRepository.update(id, foodEntity);
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.foodRepository.remove(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
