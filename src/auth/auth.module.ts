import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { ResidentService } from 'src/resident/resident.service';
import { PrismaClientModule } from 'src/prisma-client/prisma-client.module';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SCRET,
            signOptions: { expiresIn: '1h' },
        }),
        PrismaClientModule,
    ],
    providers: [AuthService, ResidentService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
