import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetup } from './swaggerSetup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  new swaggerSetup(app).setUp();
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
