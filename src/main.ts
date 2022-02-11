import { NestFactory } from '@nestjs/core';
import { CrudConfigService } from '@nestjsx/crud';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

CrudConfigService.load({
  query: {
    limit: 10,
    alwaysPaginate: true,
    cache: 2000,
  },
});

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJSX CRUD')
    .setDescription('The Nest JSX CRUD API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
