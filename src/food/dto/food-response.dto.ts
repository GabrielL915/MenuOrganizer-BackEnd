import { MealResponseDto } from './meal-response.dto';

export class FoodResponseDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  meals: MealResponseDto[];
}
