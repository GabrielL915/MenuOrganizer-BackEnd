import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  create(@Body() input: CreateFoodDto) {
    return this.foodService.create(input);
  }

  @Get()
  findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() input: UpdateFoodDto) {
    return this.foodService.update(id, input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(id);
  }
}
