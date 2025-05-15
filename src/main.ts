import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    app.enableCors({
        origin: 'http://localhost:3000', // ou seu domínio do front
        credentials: true, // ⬅️ OBRIGATÓRIO para permitir cookies
    });
    await app.listen(3001);
}
bootstrap();
