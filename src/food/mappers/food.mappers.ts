import { FoodResponseDto, MealResponseDto } from '../dto';

export function mapToFoodResponseDTO(data: any): FoodResponseDto[] {
  return data.value.map((item) => {
    const meals: MealResponseDto[] = item.meals.map((meal) => ({
      id: meal.id,
      day_of_week: meal.day_of_week,
      lunch: meal.lunch,
      dinner: meal.dinner,
    }));

    return {
      id: item.id,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
      meals,
    };
  });
}
