import { Food } from '../entities/food.entity';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

export class FoodRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  // todo tranformar em trigger
  async create(input: Food) {
    const mealsToInsert = input.meals.map((meal) => ({
      lunch: meal.lunch,
      dinner: meal.dinner,
      day_of_week: meal.day_of_week.Value,
      id_users: 'b9495a3f-a01d-47f2-8039-83249463caee',
    }));
    await this.knex('meals').insert(mealsToInsert);
    const insertedMeals = await this.knex('meals')
      .where({ id_users: 'b9495a3f-a01d-47f2-8039-83249463caee' })
      .select('*');
    return {
      meals: insertedMeals,
    };
  }

  async findAll() {
    const users = await this.knex('users').select('*');
    const meals = await this.knex('meals').select('*');
    return users.map((user) => ({
      ...user,
      meals: meals.filter((meal) => meal.id_users === user.id),
    }));
  }

  async findOne(id: string) {
    const [user] = await this.knex('users').where({ id }).select('*');
    const meals = await this.knex('meals')
      .where({ id_users: user.id })
      .select('*');
    return {
      ...user,
      meals,
    };
  }

  async update(id: string, input: Food) {
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
      id: id,
      meals: updatedMeals.flat(),
    };
  }

  async remove(id: string) {
    const meals = await this.knex('meals').where({ id_users: id }).del('*');
    const [user] = await this.knex('users').where({ id }).del('*');
    return {
      ...user,
      meals,
    };
  }
}
