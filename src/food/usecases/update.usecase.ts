import { FoodService } from '../service/food.service';
import { Result, UseCase } from '../../shared';
import { Injectable } from '@nestjs/common';
import { UpdateFoodResponseDto, UpdateFoodDto } from '../dto';

@Injectable()
export class UpdateUseCase
  implements
    UseCase<
      { id: string; input: UpdateFoodDto },
      Result<UpdateFoodResponseDto, Error>
    >
{
  constructor(private readonly service: FoodService) {}

  async execute({ id, input }: { id: string; input: UpdateFoodDto }) {
    return await this.service.update(id, input);
  }
}
