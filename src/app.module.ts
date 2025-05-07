import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma-client/prisma-client.service';
import { AddressModule } from './address/address.module';
import { ResidenceModule } from './residence/residence.module';
import { ResidentModule } from './resident/resident.module';
import { StaffModule } from './staff/staff.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AddressModule,
        ResidenceModule,
        ResidentModule,
        StaffModule,
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
