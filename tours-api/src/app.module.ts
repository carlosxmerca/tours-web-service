import { Module } from '@nestjs/common';
import { ToursModule } from './tours/tours.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './config/logging.interceptor';

@Module({
  imports: [ToursModule, PrismaModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
