import { DayOFWeek } from '../value-objects/day-of-week';
export interface Food {
  meals: {
    day_of_week: DayOFWeek;
    lunch: string;
    dinner: string;
  }[];
}
