import { IsString } from 'class-validator';

export class MealResponseDto {
  @IsString()
  id: string;
  @IsString()
  day_of_week: string;
  @IsString()
  lunch: string;
  @IsString()
  dinner: string;
}
