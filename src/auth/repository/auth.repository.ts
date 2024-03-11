import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateCadastroDto } from '../dto/create-cadastro.dto';

export class AuthRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createUser(input: CreateCadastroDto) {
    const [user] = await this.knex('users').insert(input).returning('*');
    return user;
  }
  async findOne(username: string) {
    const [user] = await this.knex('users')
      .select('*')
      .where({ username: username });
    return user;
  }
}
