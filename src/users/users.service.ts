import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
    public users: UsersDto[];

    constructor() {
        this.users = [
            {
                id: '01',
                name: 'Evandro',
                lastName: 'Barros',
                email: 'evandrobarrosb98@gmail.com',
                userPhone: '81985096173',
                residenceNumber: '225B',
            },
            {
                id: '02',
                name: 'Manoel',
                lastName: 'Eduardo',
                email: 'manoel.eduardo@gmail.com',
                userPhone: '81985096173',
                residenceNumber: '225A',
            },
        ];
    }

    getAll() {
        return this.users;
    }
}
