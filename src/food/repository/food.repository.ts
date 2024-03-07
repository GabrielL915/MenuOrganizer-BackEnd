import { Food } from '../entities/food.entity';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

export class FoodRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async create(input: Food) {
    const [user] = await this.knex('users')
      .insert({
        username: input.username,
        password: input.password,
      })
      .returning('*');
    const mealsToInsert = input.meals.map((meal) => ({
      lunch: meal.lunch,
      dinner: meal.dinner,
      day_of_week: meal.day_of_week,
      id_users: user.id,
    }));
    await this.knex('meals').insert(mealsToInsert);
    const insertedMeals = await this.knex('meals')
      .where({ id_users: user.id })
      .select('*');
    return {
      ...user,
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
    const [existingUser] = await this.knex('users').where({ id }).select('*');
    const [updatedUser] = await this.knex('users')
      .where({ id })
      .update({
        username: input.username || existingUser.username,
        password: input.password || existingUser.password,
      })
      .returning('*');

    const updatedMeals = await Promise.all(
      input.meals.map(async (meal) => {
        return this.knex('meals')
          .where({
            id_users: id,
            day_of_week: meal.day_of_week,
          })
          .update({
            lunch: meal.lunch,
            dinner: meal.dinner,
          })
          .returning('*');
      }),
    );

    return {
      ...updatedUser,
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
