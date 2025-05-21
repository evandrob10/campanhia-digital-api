import { CallService } from './call.service';
import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('call')
export class CallController {
    constructor(private readonly CallService: CallService) {}

    @Post(':userID')
    getAllCall(
        @Body('VisitantIP') VisitantIP: string,
        @Param('userID') userID: string,
    ) {
        return this.CallService.getAllCall(+userID, VisitantIP);
    }
}
