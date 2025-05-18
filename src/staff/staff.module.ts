import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Module({
    controllers: [StaffController],
    providers: [StaffService, PrismaService],
    exports: [StaffService],
})
export class StaffModule {}
