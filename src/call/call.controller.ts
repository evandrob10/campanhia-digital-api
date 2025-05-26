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
        return this.CallService.create(+userID, VisitantIP);
    }

    @Get(':callID')
    getCall(@Param(':callID') callID: string) {
        return this.CallService.getCall(+callID);
    }

    @Get('/all_visitant/:userID')
    getAllCallActive(@Param('userID') userID: string) {
        return this.CallService.getAllCallActive(+userID);
    }
}
