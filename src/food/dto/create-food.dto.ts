import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// Considerando que você converta DayOFWeek para usar enum ou mantenha como está

class MealDto {
  @IsString()
  day_of_week: string;

  @IsString()
  lunch: string;

  @IsString()
  dinner: string;
}

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MealDto)
  meals: MealDto[];
}
