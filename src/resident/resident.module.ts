import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [ResidentController],
    providers: [ResidentService, PrismaService],
    exports: [ResidentService],
})
export class ResidentModule {}
