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

  //TODO: terminar CRUD
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
    const [food] = await this.knex('food')
      .where({ id })
      .update(input)
      .returning('*');
    return food;
  }
  async remove(id: string) {
    return await this.knex('food').where({ id }).del();
  }
}
