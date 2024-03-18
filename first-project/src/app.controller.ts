import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // decorator - recebi argumentos
export class AppController {
  constructor(private readonly appService: AppService) {} // aqui neste objeto estará o crud do http
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  setHello(): string {
    return 'Aqui está meu Post'
  }
}

@Controller('users') // decorator - recebi argumentos
export class AppControllerUsers {
  constructor(private readonly appService: AppService) {} // aqui neste objeto estará o crud do http
  @Get()
  getUser(): string {
    return this.appService.getUser();
  }
  @Post()
  setUser(): string {
    return 'Aqui está meu Post de usuario'
  }
}
