import { MealResponseDto } from './meal-response.dto';

export class UpdateFoodResponseDto {
  id: string;
  meals: MealResponseDto[];
}
