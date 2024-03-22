import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { Logger } from '@nestjs/common';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super();

    this.on('connect', () => {
      Logger.log('Redis connected');
    });

    this.on('error', (error) => {
      Logger.error('Redis connection error', error);
      process.exit(1);
    });
  }
}
