import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor() {
    super();

    this.on('connect', () => {
      console.log('Redis connected');
    });

    this.on('error', (error) => {
      console.log('Redis error', error);
      process.exit(1);
    });
  }
}
