import { Module } from '@nestjs/common';
import { ToursModule } from './tours/tours.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './config/logging.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggerModuleModule } from './logger-module/logger-module.module';

@Module({
  imports: [
    ToursModule,
    PrismaModule,
    PrometheusModule.register({
      defaultLabels: {
        app: 'Tours API',
      },
    }),
    LoggerModuleModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
