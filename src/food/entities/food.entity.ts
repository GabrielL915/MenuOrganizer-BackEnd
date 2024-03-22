import { DayOfWeek } from '../value-objects/day-of-week';
export interface Food {
  meals: {
    day_of_week: DayOfWeek;
    lunch: string;
    dinner: string;
  }[];
}
