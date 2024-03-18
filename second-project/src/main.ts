import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()) // PIPES - PASSAM INFORMAÇÕES PARA O BOOTSTRAP, O BOOTSTRAP IRÁ MANDAR PARA A PORTA
  await app.listen(3000);
}
bootstrap();
