import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodRepository } from './repository/food.repository';
@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}
  async create(createFoodDto: CreateFoodDto) {
    try {
      return await this.foodRepository.create(createFoodDto);
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
      return await this.foodRepository.update(id, updateFoodDto);
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
