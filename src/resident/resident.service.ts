import { Injectable } from '@nestjs/common';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class ResidentService {
    constructor(private readonly prisma: PrismaService) {}

    create(createResidentDto: CreateResidentDto) {
        const response = this.prisma.resident.create({
            data: {
                name: createResidentDto.name,
                lastName: createResidentDto.lastName,
                phone: createResidentDto.phone,
                email: createResidentDto.email,
                password: createResidentDto.password,
                residence_id: createResidentDto.residence_id,
                staff_id: createResidentDto.staffs,
            },
        });
        return response;
    }

    findAll() {
        return `This action returns all resident`;
    }

    findOne(id: number) {
        return `This action returns a #${id} resident`;
    }

    update(id: number, updateResidentDto: UpdateResidentDto) {
        return `This action updates a #${id} resident`;
    }

    remove(id: number) {
        return `This action removes a #${id} resident`;
    }
}
