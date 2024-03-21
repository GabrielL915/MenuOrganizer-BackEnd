import { FoodResponseDto, MealResponseDto } from '../dto';

export function mapToFoodResponseDtoArray(data: any): FoodResponseDto[] {
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

export function mapToFoodResponseDto(data: any): FoodResponseDto {
  const meals: MealResponseDto[] = data.value.meals.map((meal) => ({
    id: meal.id,
    day_of_week: meal.day_of_week,
    lunch: meal.lunch,
    dinner: meal.dinner,
  }));

  return {
    id: data.value.id,
    createdAt: new Date(data.value.createdAt),
    updatedAt: new Date(data.value.updatedAt),
    meals,
  };
}
