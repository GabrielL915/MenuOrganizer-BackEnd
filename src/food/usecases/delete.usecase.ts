import { FoodResponseDto } from '../dto';
import { FoodService } from '../service/food.service';
import { Result, UseCase } from '../../shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUseCase
  implements UseCase<string, Result<FoodResponseDto, Error>>
{
  constructor(private readonly service: FoodService) {}

  async execute(id: string) {
    return await this.service.delete(id);
  }
}
