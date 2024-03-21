import { InjectKnex, Knex } from 'nestjs-knex';
import { AuthRequestDto } from '../dto/auth-request.dto';

export class AuthRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createUser(input: AuthRequestDto) {
    const [user] = await this.knex('users').insert(input).returning('*');
    return user;
  }
  async findOne(id: string) {
    const [user] = await this.knex('users').select('*').where({ id: id });
    return user;
  }
}
