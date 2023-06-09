import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });
  await app.listen(port);
  Logger.log(`running app with http://localhost:${port}/`, 'Running PORT');
}
bootstrap();
