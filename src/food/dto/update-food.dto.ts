import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  username?: string;

  @IsString()
  password?: string;

  @IsArray()
  meals: [
    {
      day_of_week: string;
      lunch: string;
      dinner: string;
    },
  ];
}
