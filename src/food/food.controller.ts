import {
  Controller,
  Get,
  Body,
  Put,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  FindAllUseCase,
  UpdateUseCase,
  FindOneUseCase,
  DeleteUseCase,
} from './usecases';
import { UpdateFoodDto } from './dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessTokenGuard } from 'src/shared';

@Controller('meal')
@ApiTags('meal')
export class FoodController {
  constructor(
    private readonly findAllUseCase: FindAllUseCase,
    private readonly updateUseCase: UpdateUseCase,
    private readonly findOneUseCase: FindOneUseCase,
    private readonly deleteUseCase: DeleteUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os menus' })
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Get('/find-one')
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Listar um unico menu' })
  findOne(@Req() req: Request) {
    const id = req['user'].sub;
    return this.findOneUseCase.execute(id);
  }

  @Put('/update')
  @UseGuards(AccessTokenGuard)
  @ApiOperation({ summary: 'Atualizar um unico menu' })
  update(@Req() req: Request, @Body() input: UpdateFoodDto) {
    const id = req['user'].sub;
    return this.updateUseCase.execute({ id, input });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um unico menu' })
  delete(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
