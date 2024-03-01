import { Food } from '../entities/food.entity';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

export class FoodRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async create(input: Food) {
    const [food] = await this.knex('food').insert(input).returning('*');
    return food;
  }
  async findAll() {
    return await this.knex('food').select('*');
  }
  async findOne(id: string) {
    return await this.knex('food').where({ id }).select('*');
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
