import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLoggerConfig } from './config';
import * as dotenv from 'dotenv';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { HttpExceptionFilter } from './filters';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
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
    .addServer('http://localhost:3000/', 'Local environment')
    .setVersion('1.0')
    .addTag('MyTag')
    .build();

  // 정적 파일 제공 설정
  app.useStaticAssets(join('uploads'), {
    prefix: '/uploads', // URL에서 /uploads 경로로 파일에 접근 가능
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(process.env.SERVER_PORT);

  console.log(`=================================`);
  console.log(`=========== ENV : ${process.env.NODE_ENV} ===========`);
  console.log(`🚀 app listening on the port ${process.env.SERVER_PORT}`);
  console.log(`=================================`);
}

bootstrap();
