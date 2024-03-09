import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = (
  app: INestApplication,
  name: string,
  prefix: string,
) => {
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(`${name} API docs`)
    .setVersion('0.1.0-alpha.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(prefix, app, document);
};
