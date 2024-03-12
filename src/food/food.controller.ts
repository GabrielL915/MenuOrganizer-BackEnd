import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/shared/guards/access-token.guard';

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

  @Get('/find-one')
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Listar um unico menu' })
  findOne(@Req() req: Request) {
    const id = req['user'].sub;
    return this.foodService.findOne(id);
  }

  @Put('/update')
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Atualizar um unico menu' })
  update(@Req() req: Request, @Body() input: UpdateFoodDto) {
    const id = req['user'].sub;
    return this.foodService.update(id, input);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um unico menu' })
  remove(@Param('id') id: string) {
    return this.foodService.remove(id);
  }
}
