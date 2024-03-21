import { Injectable } from '@nestjs/common';
import { FoodRepository } from '../food.repository';
import { RedisService } from 'src/config/redis/redis.service';
import { FoodRepositoryImpl } from '../food.repositoryImpl';

@Injectable()
export class RedisFoodRepository implements FoodRepository {
  constructor(
    private readonly redisService: RedisService,
    private readonly foodRepository: FoodRepositoryImpl,
  ) {}

  async findAll() {
    const foods = await this.redisService.get('menu');
    if (!foods) {
      const meals = await this.foodRepository.findAll();
      await this.redisService.set('menu', JSON.stringify(meals), 'EX', 12);
      console.log('from db');
      return meals;
    }
    console.log('from redis');
    return JSON.parse(foods);
  }

  async findOne(id: string) {
    const food = await this.redisService.get(id);
    if (!food) {
      const meal = await this.foodRepository.findOne(id);
      await this.redisService.set(id, JSON.stringify(meal), 'EX', 12);
      console.log('from db');
      return meal;
    }
    console.log('from redis');
    return JSON.parse(food);
  }

  async update(id: string, input: any) {
    const update = await this.foodRepository.update(id, input);
    await this.redisService.del('menu');
    await this.redisService.del(id);
    return update;
  }

  async delete(id: string) {
    const deleted = await this.foodRepository.delete(id);
    await this.redisService.del('menu');
    await this.redisService.del(id);
    return deleted;
  }
}
