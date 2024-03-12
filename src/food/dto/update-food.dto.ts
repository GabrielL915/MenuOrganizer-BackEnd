import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class MealDto {
  @IsString()
  day_of_week: string;

  @IsString()
  lunch: string;

  @IsString()
  dinner: string;
}

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealDto)
  meals: MealDto[];
}
