import { IsArray, IsString, ValidateNested } from 'class-validator';
import { MealResponseDto } from './meal-response.dto';
import { Type } from 'class-transformer';

export class UpdateFoodResponseDto {
  @IsString()
  id: string;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealResponseDto)
  meals: MealResponseDto[];
}
