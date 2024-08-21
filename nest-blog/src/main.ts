import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLoggerConfig } from './config';
import * as dotenv from 'dotenv';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { HttpExceptionFilter } from './filters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonLoggerConfig,
  });

  // 모든 도메인에 대한 CORS 허용
  app.enableCors({
    origin: true,
  });

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API documentation for my project')
    .setVersion('1.0')
    .addTag('MyTag')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(process.env.SERVER_PORT);

  console.log(`=================================`);
  console.log(`=========== ENV : ${process.env.NODE_ENV} ===========`);
  console.log(`🚀 app listening on the port ${process.env.SERVER_PORT}`);
  console.log(`=================================`);
}

bootstrap();
