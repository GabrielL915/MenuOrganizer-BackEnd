import { IsArray, IsString, ValidateNested } from 'class-validator';
import { MealResponseDto } from './meal-response.dto';
import { Type } from 'class-transformer';

export class FoodResponseDto {
  @IsString()
  id: string;
  createdAt: Date;
  updatedAt: Date;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealResponseDto)
  meals: MealResponseDto[];
}
