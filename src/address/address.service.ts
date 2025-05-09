import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class AddressService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createAddressDto: CreateAddressDto) {
        const response = await this.prisma.address.create({
            data: {
                street: createAddressDto.street,
                number: createAddressDto.number,
                district: createAddressDto.district,
                city: createAddressDto.city,
                state: createAddressDto.state,
                zip_code: createAddressDto.zip_code,
            },
        });
        return response;
    }

    async findOne(id: number) {
        const response = await this.prisma.address.findUnique({
            where: {
                id: id,
            },
        });
        return response;
    }

    async update(id: number, updateAddressDto: UpdateAddressDto) {
        const response = await this.prisma.address.update({
            data: {
                street: updateAddressDto.street,
                number: updateAddressDto.number,
                district: updateAddressDto.district,
                city: updateAddressDto.city,
                zip_code: updateAddressDto.zip_code,
            },
            where: {
                id: id,
            },
        });
        return response;
    }

    async remove(id: number) {
        return await this.prisma.address.delete({
            where: {
                id: id,
            },
        });
    }
}
