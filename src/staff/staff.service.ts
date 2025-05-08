import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class StaffService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createStaffDto: CreateStaffDto) {
        const response = await this.prisma.staff.create({
            data: {
                Address_id: createStaffDto.address_id,
            },
        });
        return response;
    }

    async findOne(id: number) {
        return await this.prisma.staff.findUnique({ where: { id: id } });
    }

    async removeAdminAdress(address_id?: number) {
        if (address_id) {
            const staffs = await this.prisma.staff.findMany({
                where: { Address_id: address_id },
            });
            const staffActiveAddress = staffs.filter((element) => {
                return element.admin_address;
            });
            if (staffActiveAddress) {
                return this.prisma.staff.update({
                    data: {
                        admin_address: false,
                    },
                    where: { id: staffActiveAddress[0].id },
                });
            }
        }
    }

    async update(id: number, updateStaffDto: UpdateStaffDto) {
        const update = this.removeAdminAdress(updateStaffDto.address_id);
        const response = await this.prisma.staff.update({
            data: {
                admin_address: updateStaffDto.admin_address,
                admin_residence: updateStaffDto.admin_residence,
            },
            where: {
                id: id,
            },
        });
        return (await update)
            ? [{ message: 'Troca realizada' }, response]
            : response;
    }
}
