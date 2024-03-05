import { Food } from '../entities/food.entity';
import { processDay } from '../../shared/utils/process-day';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

export class FoodRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async create(input: Food) {
    const daysOfWeek = [
      'segunda',
      'terca',
      'quarta',
      'quinta',
      'sexta',
      'sabado',
      'domingo',
    ];

    const [user] = await this.knex('users')
      .insert({
        username: input.username,
        password: input.password,
      })
      .returning('*');

    const insertedDays = [];
    for (const dia of input.dias) {
      const dayInsertion = {
        monday: dia.segunda.length > 0,
        tuesday: dia.terca.length > 0,
        wednesday: dia.quarta.length > 0,
        thursday: dia.quinta.length > 0,
        friday: dia.sexta.length > 0,
        saturday: dia.sabado.length > 0,
        sunday: dia.domingo.length > 0,
      };
      const [day] = await this.knex('days').insert(dayInsertion).returning('*');
      insertedDays.push(day);
    }

    const mealsToInsert = input.dias.flatMap((dia, index) => {
      const dayId = insertedDays[index].id;
      return daysOfWeek.flatMap((day) => processDay(dia[day], dayId, user.id));
    });

    await this.knex('meals').insert(mealsToInsert);
    return {
      user,
      days: insertedDays,
      meals: mealsToInsert,
    };
  }

  //TODO: terminar CRUD
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
