import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-client/prisma-client.service';
import { UpdateCallDto } from './dto/UpdateCallDto';

@Injectable()
export class CallService {
    constructor(private readonly prisma: PrismaService) {}

    async create(userID: number, VisitantIP: string) {
        try {
            const checkData = await this.checkDataCall(userID, VisitantIP);
            //Verifica se venho alguma call e retorna:
            if (checkData && checkData?.length > 0) return checkData;
            //Cria a call caso não tenha nenhuma ativa:
            const response = await this.prisma.call.create({
                data: {
                    ResidentID: userID,
                    VisitantIP: VisitantIP,
                },
            });
            return response;
        } catch (e) {
            if (e instanceof Error) {
                return {
                    message: e.message,
                };
            }
        }
    }

    async checkDataCall(userID: number, VisitantIP: string) {
        //Verificação de dados de entrada:
        if (!userID || !VisitantIP)
            throw new Error('Dados insuficientes para criar a chamada!');
        //verificação de existencia de chamada ativa:
        const response = await this.getCallActiveVisitint(userID, VisitantIP);
        if (response) return response;
    }

    async getCall(callID: number) {
        return await this.prisma.call.findUnique({
            where: {
                id: callID,
            },
        });
    }

    async getCallActiveVisitint(userID: number, VisitantIP: string) {
        const response = await this.prisma.call.findMany({
            where: {
                callActive: true,
                ResidentID: userID,
                VisitantIP: VisitantIP,
            },
        });
        return response;
    }

    async getAllCallActive(userID: number) {
        const response = await this.prisma.call.findMany({
            where: {
                ResidentID: userID,
                callActive: true,
            },
        });
        return response;
    }

    async updateCall(callID: number, dataCall: UpdateCallDto) {
        return this.prisma.call.update({
            where: {
                id: callID,
            },
            data: {
                VisitantIP: dataCall.VisitantIP,
                ResidentID: dataCall.ResidentID,
                callActive: dataCall.callActive,
                callAnswered: dataCall.callAnswered,
                CallDateTime: dataCall.CallDateTime,
            },
        });
    }
}
