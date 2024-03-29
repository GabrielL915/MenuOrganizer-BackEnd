import { Food } from '../entities/food.entity';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { FoodRepository } from './food.repository';
import { updateFood } from 'src/shared';

export class FoodRepositoryImpl implements FoodRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll(): Promise<Food[]> {
    const users = await this.knex('users').select('*');
    const meals = await this.knex('meals').select('*');
    return users.map((user) => ({
      ...user,
      meals: meals.filter((meal) => meal.id_users === user.id),
    }));
  }

  async findOne(id: string): Promise<Food> {
    const [user] = await this.knex('users').where({ id }).select('*');
    const meals = await this.knex('meals')
      .where({ id_users: user.id })
      .select('*');
    return {
      ...user,
      meals,
    };
  }

  async update(id: string, input: Food): Promise<updateFood> {
    const [user] = await this.knex('users').where({ id }).select('id');
    const updatedMeals = await Promise.all(
      input.meals.map(async (meal) => {
        return this.knex('meals')
          .where({
            id_users: id,
            day_of_week: meal.day_of_week.Value,
          })
          .update({
            lunch: meal.lunch,
            dinner: meal.dinner,
          })
          .returning('*');
      }),
    );
    return {
      id: user.id,
      meals: updatedMeals.flat(),
    };
  }

  async delete(id: string): Promise<Food> {
    const meals = await this.knex('meals').where({ id_users: id }).del('*');
    const [user] = await this.knex('users').where({ id }).del('*');
    return {
      ...user,
      meals,
    };
  }
}
