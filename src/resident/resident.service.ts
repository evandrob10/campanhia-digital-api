import { Injectable } from '@nestjs/common';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class ResidentService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createResidentDto: CreateResidentDto) {
        const response = await this.prisma.resident.create({
            data: {
                name: createResidentDto.name,
                lastName: createResidentDto.lastName,
                phone: createResidentDto.phone,
                email: createResidentDto.email,
                password: createResidentDto.password,
                residence_id: createResidentDto.residence_id,
                staff_id: createResidentDto.staff_id,
            },
        });
        return response;
    }

    async findAll(residence_id: number) {
        const response = await this.prisma.resident.findMany({
            where: {
                residence_id: residence_id,
            },
        });
        return response;
    }

    async findOne(id: number) {
        return await this.prisma.resident.findUnique({ where: { id: id } });
    }

    async findEmail(email: string) {
        return await this.prisma.resident.findUnique({
            where: { email: email },
        });
    }

    async update(id: number, updateResidentDto: UpdateResidentDto) {
        const response = await this.prisma.resident.update({
            where: { id: id },
            data: {
                name: updateResidentDto.name,
                lastName: updateResidentDto.lastName,
                phone: updateResidentDto.phone,
                email: updateResidentDto.email,
                password: updateResidentDto.password,
                residence_id: updateResidentDto.residence_id,
                staff_id: updateResidentDto.staff_id,
            },
        });
        return response;
    }

    remove(id: number) {
        return this.prisma.resident.delete({ where: { id: id } });
    }
}
