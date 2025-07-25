import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Config swagger docs
  const config = new DocumentBuilder()
    .setTitle('Tours API')
    .setDescription('The best ever tours API')
    .setVersion('1.0')
    .addTag('tours')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Get allowed origins
  const origins = process.env.ORIGINS
    ? process.env.ORIGINS.split(',').map((origin) => origin.trim())
    : [];

  // Enable cors for allowed origins
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || origins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy: Origin ${origin} not allowed`), false);
      }
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  // Log server info
  console.log('\n=== Server Info ===');
  console.log(`Port: ${port}`);
  console.log('Allowed Origins:');
  if (origins.length > 0) {
    origins.forEach((origin) => console.log(`- ${origin}`));
  } else {
    console.log('- (none specified)');
  }
  console.log(`Swagger available at: http://localhost:${port}/api`);
  console.log('===================\n');
}
bootstrap();
