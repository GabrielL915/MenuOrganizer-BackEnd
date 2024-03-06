export interface Food {
  id: string;
  username?: string;
  password?: string;
  meals: [
    {
      day_of_week: string;
      lunch: string;
      dinner: string;
    },
  ];
}
