import { Module } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';

@Module({
    controllers: [ResidentController],
    providers: [ResidentService],
})
export class ResidentModule {}
