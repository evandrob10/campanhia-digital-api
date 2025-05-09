import { Injectable } from '@nestjs/common';
import { CreateResidenceDto } from './dto/create-residence.dto';
import { UpdateResidenceDto } from './dto/update-residence.dto';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class ResidenceService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createResidenceDto: CreateResidenceDto) {
        const response = await this.prisma.residence.create({
            data: {
                name: createResidenceDto.name,
                address_id: createResidenceDto.address_id,
            },
        });
        return response;
    }

    findAll(address_id: number) {
        const response = this.prisma.residence.findMany({
            where: {
                address_id: address_id,
            },
            orderBy: [
                {
                    name: 'asc',
                },
            ],
        });
        return response;
    }

    findOne(id: number) {
        const response = this.prisma.residence.findUnique({
            where: {
                id: id,
            },
        });
        return response;
    }

    update(id: number, updateResidenceDto: UpdateResidenceDto) {
        const response = this.prisma.residence.update({
            data: { name: updateResidenceDto.name },
            where: {
                id: id,
            },
        });
        return response;
    }

    remove(id: number) {
        return this.prisma.residence.delete({ where: { id: id } });
    }
}
