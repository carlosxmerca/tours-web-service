import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import LokiTransport from 'winston-loki';
import WinstonCloudWatch from 'winston-cloudwatch';

@Injectable()
export class WinstonLogger implements LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    const cloudwatchTransport = new WinstonCloudWatch({
      logGroupName: process.env.CW_LOG_GROUP || 'tours-app-logs',
      logStreamName: process.env.CW_LOG_STREAM || 'tours-api',
      awsRegion: process.env.AWS_REGION || 'us-east-2',
      jsonMessage: true,
    });

    cloudwatchTransport.on('error', (err) => {
      console.error('CloudWatch error:', err.message);
    });

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
        cloudwatchTransport,
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
