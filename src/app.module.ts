import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma-client/prisma-client.service';
import { AddressModule } from './address/address.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AddressModule,
    ],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
