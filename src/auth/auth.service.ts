import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/AuthDto';
import { JwtService } from '@nestjs/jwt';
import { ResidentService } from 'src/resident/resident.service';
import { StaffService } from 'src/staff/staff.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly resident: ResidentService,
        private readonly JwtService: JwtService,
        private readonly Staff: StaffService,
    ) {}

    async authenticate(dataLogin: AuthDto) {
        const user = await this.resident.findEmail(dataLogin.email);
        const checkPassword =
            user && this.validatePassword(dataLogin.password, user.password);
        if (checkPassword) {
            const staff = await this.Staff.findOne(user.staff_id);
            return staff
                ? this.generateToken(
                      user.id,
                      user?.name,
                      staff?.Address_id,
                      staff?.admin_address,
                      staff?.admin_residence,
                  )
                : new UnauthorizedException();
        } else {
            new UnauthorizedException();
        }
    }

    async verifyToken(token: string): Promise<object> {
        return this.JwtService.verify(token);
    }

    validatePassword(inputPassword: string, userPassword: string): boolean {
        return userPassword === inputPassword;
    }

    async generateToken(
        userID: number,
        userName: string,
        addressID: number | null,
        adminAddress: boolean,
        adminResidence: boolean,
    ) {
        const payload = {
            userID,
            userName,
            addressID,
            adminAddress,
            adminResidence,
        };
        const acess_token = await this.JwtService.signAsync(payload);
        return acess_token;
    }
}
