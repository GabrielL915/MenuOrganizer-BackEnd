import { Update, Delete, FindAll, FindOne, updateFood } from 'src/shared';
import { Food } from '../entities/food.entity';
export abstract class FoodRepository
  implements
    FindAll<Food>,
    FindOne<string, Food>,
    Update<Food, string, updateFood>,
    Delete<string, Food>
{
  abstract findAll(): Promise<Food[]>;
  abstract findOne(id: string): Promise<Food>;
  abstract update(id: string, input: Food): Promise<updateFood>;
  abstract delete(id: string): Promise<Food>;
}
