import { DayOFWeek } from '../value-objects/day-of-week';
export interface Food {
  id: string;
  username?: string;
  password?: string;
  meals: {
    day_of_week: DayOFWeek;
    lunch: string;
    dinner: string;
  }[];
}
