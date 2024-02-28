import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {
  create(createFoodDto: CreateFoodDto): Food {
    console.log(createFoodDto);
    return createFoodDto;
  }

  findAll() {
    return `This action returns all food`;
  }

  findOne(id: string) {
    return `This action returns a #${id} food`;
  }

  update(id: string, updateFoodDto: UpdateFoodDto) {
    console.log(updateFoodDto);
    return `This action updates a #${id} food`;
  }

  remove(id: string) {
    return `This action removes a #${id} food`;
  }
}
