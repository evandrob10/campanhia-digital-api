import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Module({
    controllers: [AddressController],
    providers: [AddressService, PrismaService],
})
export class AddressModule {}
