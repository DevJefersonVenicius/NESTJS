import { Module } from '@nestjs/common';
import { CarEnjoyController } from './car_enjoy.controller';
import { CarEnjoyService } from './car_enjoy.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarEnjoyController],
  providers: [CarEnjoyService, PrismaService],
  exports: [PrismaModule],
  imports: [CarEnjoyService],
})
export class CarEnjoyModule {}
