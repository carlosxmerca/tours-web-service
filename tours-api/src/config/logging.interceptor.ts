import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const handler = context.getHandler().name;

    const startTime = Date.now();

    this.logger.log(
      `[${method}] ${url} - Handler: ${handler} - Request started`,
    );

    return next.handle().pipe(
      tap({
        next: () => {
          const duration = Date.now() - startTime;
          this.logger.log(`[${method}] ${url} handled in ${duration}ms`);
        },
        error: (err) => {
          const duration = Date.now() - startTime;
          this.logger.error(
            `[${method}] ${url} failed in ${duration}ms`,
            err.stack,
          );
        },
      }),
    );
  }
}
