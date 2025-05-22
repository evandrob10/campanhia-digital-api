import { CallService } from './call.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('call')
export class CallController {
    constructor(private readonly CallService: CallService) {}

    @Post(':userID')
    CallVisitant(
        @Body('VisitantIP') VisitantIP: string,
        @Param('userID') userID: string,
    ) {
        return this.CallService.CallVisitant(+userID, VisitantIP);
    }

    @Get(':userID')
    getAllCallActive(userID: number) {
        return this.CallService.getAllCallActive(userID);
    }
}
