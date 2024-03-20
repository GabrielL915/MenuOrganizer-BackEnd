import { FoodResponseDto } from '../dto';
import { FoodService } from '../service/food.service';
import { Result, UseCase } from '../../shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllUseCase
  implements UseCase<void, Result<FoodResponseDto[], Error>>
{
  constructor(private readonly service: FoodService) {}

  async execute() {
    return await this.service.findAll();
  }
}
