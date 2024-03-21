// src/config/redis.module.ts
import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';

@Global() // Isso torna o módulo globalmente disponível
@Module({
  providers: [RedisService],
  exports: [RedisService], // Exporta RedisService para que possa ser injetado em outros módulos
})
export class RedisModule {}
