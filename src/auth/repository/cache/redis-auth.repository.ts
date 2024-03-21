import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/config/redis.service';
import { AuthRepository } from '../auth.repository';
import { AuthRepositoryImpl } from '../auth.repositoryImpl';

@Injectable()
export class RedisAuthRepository implements AuthRepository {
  constructor(
    private readonly redisService: RedisService,
    private readonly authRepository: AuthRepositoryImpl,
  ) {}

  async createUser(id: any) {
    const user = await this.redisService.get(id);
    if (!user) {
      const user = await this.authRepository.createUser(id);
      await this.redisService.set(id, JSON.stringify(user), 'EX', 12);
      console.log('from db');
      return user;
    }
    console.log('from redis');
    return JSON.parse(user);
  }

  async findOne(id: string) {
    const user = await this.redisService.get(id);
    if (!user) {
      const user = await this.authRepository.findOne(id);
      await this.redisService.set(id, JSON.stringify(user), 'EX', 12);
      console.log('from db');
      return user;
    }
    console.log('from redis');
    return JSON.parse(user);
  }
}
