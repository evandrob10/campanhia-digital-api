import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { ResidentService } from './resident.service';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateProfileDto, UpdateResidentDto } from './dto/update-resident.dto';
import { AuthGuard } from 'src/auth/auth.guards';

@Controller('resident')
export class ResidentController {
    constructor(private readonly residentService: ResidentService) {}

    //GET'S
    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.residentService.findOne(+id);
    }
    @UseGuards(AuthGuard)
    @Get('/profile/:id')
    getProfile(@Param('id') id: string) {
        return this.residentService.getProfile(+id);
    }

    @Get('/all_resident/:id')
    findAll(@Param('id') id: string) {
        return this.residentService.findAll(+id);
    }
    //POST'S
    @Post()
    create(@Body() createResidentDto: CreateResidentDto) {
        return this.residentService.create(createResidentDto);
    }

    //UPDAT'S
    @UseGuards(AuthGuard)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateResidentDto: UpdateResidentDto,
    ) {
        return this.residentService.update(+id, updateResidentDto);
    }
    @UseGuards(AuthGuard)
    @Patch('/update-profile/:id')
    updateProfile(
        @Param('id') id: string,
        @Body() UpdateProfile: UpdateProfileDto,
    ) {
        return this.residentService.updateProfile(+id, UpdateProfile);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.residentService.remove(+id);
    }
}
