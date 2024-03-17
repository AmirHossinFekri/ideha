import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validation/validation.pipe';
import { ExceptionsLoggerFilter } from './exceptions-logger/exceptions-logger.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ExceptionsLoggerFilter());

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3030);
}
bootstrap();
