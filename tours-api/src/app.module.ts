import { Module } from '@nestjs/common';
import { ToursModule } from './tours/tours.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ToursModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
