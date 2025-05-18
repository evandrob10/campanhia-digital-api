import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Query,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) {}

    @Post()
    create(@Body() createStaffDto: CreateStaffDto) {
        return this.staffService.create(createStaffDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.staffService.findOne(+id);
    }

    @Patch('update')
    update(
        @Query()
        { address, id, newid }: { address: boolean; id: string; newid: string },
    ) {
        return this.staffService.update(address, +id, +newid);
    }
}
