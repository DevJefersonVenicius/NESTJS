import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CarEnjoyService } from '../CarEnjoy/car_enjoy.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService],
  imports: [PrismaModule],
  exports: [CarEnjoyService],
})
export class CarsModule {}
