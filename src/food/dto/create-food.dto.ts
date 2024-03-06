import { IsNotEmpty, IsString, IsArray } from 'class-validator';
export class CreateFoodDto {
  id: string;
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  password: string;

  @IsArray()
  meals: [
    {
      day_of_week: string;
      lunch: string;
      dinner: string;
    },
  ];
}
