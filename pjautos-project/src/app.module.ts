import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './PjAutos/cars/cars.module';
import { CarEnjoyModule } from './PjAutos/CarEnjoy/car_enjoy.module';
import { UsersModule } from './PjAutos/Users/users.module';

@Module({
  imports: [CarsModule, CarEnjoyModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
