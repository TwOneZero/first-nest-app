import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //decorator 가 없는 object 는 거른다.
      whitelist: true,
      //거르지도 않고 걍 리퀘스트 안받음
      forbidNonWhitelisted: true,
      //url 을 함수 작성 시 원하는 타입으로 바꿔줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
