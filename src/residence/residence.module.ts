import { Module } from '@nestjs/common';
import { ResidenceService } from './residence.service';
import { ResidenceController } from './residence.controller';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Module({
    controllers: [ResidenceController],
    providers: [ResidenceService, PrismaService],
})
export class ResidenceModule {}
