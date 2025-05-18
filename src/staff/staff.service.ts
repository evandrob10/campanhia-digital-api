import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
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

    async removeStaff(id: number, address?: boolean) {
        if (address) {
            return await this.prisma.staff.update({
                where: { id: id },
                data: {
                    admin_address: false,
                },
            });
        } else {
            return await this.prisma.staff.update({
                where: { id: id },
                data: {
                    admin_residence: false,
                },
            });
        }
    }

    async checkStaffAddress(address_id: number) {
        const response = await this.prisma.staff.findMany({
            where: {
                Address_id: address_id,
                admin_address: true,
            },
        });
        return response;
    }

    async updateStaffAddress(id: number, newid: number) {
        if (id && newid) {
            const removeStaff = await this.removeStaff(id, true);
            if (removeStaff) {
                return this.prisma.staff.update({
                    where: { id: newid },
                    data: {
                        admin_address: true,
                    },
                });
            }
        } else {
            const staff = await this.findOne(id);
            if (staff && staff.Address_id) {
                const response = await this.checkStaffAddress(staff.Address_id);
                if (!response) {
                    return this.prisma.staff.update({
                        where: { id: id },
                        data: {
                            admin_address: true,
                        },
                    });
                } else {
                    return {
                        message:
                            'Não é possivel realizar alteração, você precisa informar a staff atual e a nova staff',
                    };
                }
            }
        }
    }
    async updateStaffResidence(id: number) {
        if (id) {
            return this.prisma.staff.update({
                where: { id: id },
                data: {
                    admin_residence: true,
                },
            });
        } else {
            return {
                message: 'É necessario informar a residencia',
            };
        }
    }

    async update(address: boolean, id: number, newid: number) {
        if (address) {
            return await this.updateStaffAddress(id, newid);
        } else {
            return this.updateStaffResidence(id);
        }
    }
}
