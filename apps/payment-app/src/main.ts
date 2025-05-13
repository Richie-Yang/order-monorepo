import { NestFactory } from '@nestjs/core';
import { PaymentAppModule } from './payment-app.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentAppModule);
  await app.listen(process.env.port ?? 3000);
}
void bootstrap();
