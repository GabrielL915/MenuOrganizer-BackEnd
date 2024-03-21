import { InjectKnex, Knex } from 'nestjs-knex';
import { AuthRequestDto } from '../dto/auth-request.dto';
import { AuthRepository } from './auth.repository';
import { Auth } from '../entities/auth.entity';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async createUser(id: AuthRequestDto): Promise<Auth> {
    const [user] = await this.knex('users').insert(id).returning('*');
    return user;
  }
  async findOne(id: string): Promise<Auth> {
    const [user] = await this.knex('users').select('*').where({ id: id });
    return user;
  }
}
