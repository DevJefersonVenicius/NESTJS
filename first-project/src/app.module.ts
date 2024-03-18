import { Module } from '@nestjs/common';
import { AppController, AppControllerUsers } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], // modulos criados ficam aqui
  controllers: [AppController, AppControllerUsers], // controle
  providers: [AppService], // serviços
})
export class AppModule {}
