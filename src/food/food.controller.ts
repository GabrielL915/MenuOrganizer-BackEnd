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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('meal')
@ApiTags('meal')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo menu' })
  create(@Body() input: CreateFoodDto) {
    return this.foodService.create(input);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os menus' })
  findAll() {
    return this.foodService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um unico menu' })
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um unico menu' })
  update(@Param('id') id: string, @Body() input: UpdateFoodDto) {
    return this.foodService.update(id, input);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um unico menu' })
  remove(@Param('id') id: string) {
    return this.foodService.remove(id);
  }
}
