import { CallService } from './call.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateCallDto } from './dto/UpdateCallDto';

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

    @Get('/all_visitant/:userID')
    getAllCallActive(userID: number) {
        return this.CallService.getAllCallActive(userID);
    }

    @Patch(':callID')
    updateCall(@Param('callID') callID: string, @Body() data: UpdateCallDto) {
        return this.CallService.updateCall(+callID, data);
    }
}
