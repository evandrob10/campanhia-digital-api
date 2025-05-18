import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { ResidentService } from 'src/resident/resident.service';
import { PrismaClientModule } from 'src/prisma-client/prisma-client.module';
import { StaffModule } from 'src/staff/staff.module';
import { StaffService } from 'src/staff/staff.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SCRET,
            signOptions: { expiresIn: '1h' },
        }),
        PrismaClientModule,
        StaffModule,
    ],
    providers: [AuthService, ResidentService, StaffService],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
