import { NestFactory } from '@nestjs/core'; // arquivo de fabricação
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // aqui pode-se mudar a porta de entrada
}
bootstrap();
