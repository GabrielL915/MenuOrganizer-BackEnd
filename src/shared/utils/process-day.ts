import { DayMeal } from '../types/types';

export function processDay(dayMeals: DayMeal, dayId: string, userId: string) {
  return dayMeals.map((meal) => ({
    lunch: meal.almoco,
    dinner: meal.jantar,
    id_days: dayId,
    id_users: userId,
  }));
}
