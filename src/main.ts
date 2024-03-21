import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { swaggerConfig } from './docs/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;
  app.setGlobalPrefix(globalPrefix);
  swaggerConfig(app, 'Menu Organizer', 'docs');
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}/${globalPrefix}`);
}
bootstrap();
