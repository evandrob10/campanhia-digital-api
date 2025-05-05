import { Get, Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Get('/all_users')
    getAllUsers() {
        return this.UsersService.getAll();
    }
}
