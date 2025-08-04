import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import LokiTransport from 'winston-loki';

@Injectable()
export class WinstonLogger implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new LokiTransport({
          host: process.env.LOKI,
          json: true,
          labels: { service: 'tours-api' },
        }),
      ],
    });
  }

  log(message: string, requestId?: string, context?: string) {
    this.logger.info(message, { context, requestId });
  }

  error(message: string, trace?: string, requestId?: string, context?: string) {
    this.logger.error(message, { trace, context, requestId });
  }

  warn(message: string, context?: string) {
    this.logger.warn(message, { context });
  }

  debug?(message: string, context?: string) {
    this.logger.debug(message, { context });
  }

  verbose?(message: string, context?: string) {
    this.logger.verbose(message, { context });
  }
}
