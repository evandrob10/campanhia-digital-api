import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';

@Injectable()
export class CallService {
    constructor(private readonly prisma: PrismaService) {}

    async create(userID: number, VisitantIP: string) {
        const response = await this.prisma.call.create({
            data: {
                ResidentID: userID,
                VisitantIP: VisitantIP,
            },
        });
        return response;
    }

    async getAllCall(userID: number, VisitantIP: string) {
        const checkCall = await this.checkCallActive(userID, VisitantIP);
        if (checkCall) return checkCall;
    }

    async checkCallActive(userID: number, VisitantIP: string) {
        if (VisitantIP) {
            const response = await this.prisma.call.findMany({
                where: {
                    ResidentID: userID,
                    VisitantIP: VisitantIP,
                    callActive: true,
                },
            });
            if (!response) return await this.create(userID, VisitantIP);
            return response;
        }
    }
}
