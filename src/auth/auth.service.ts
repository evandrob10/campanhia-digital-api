import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/AuthDto';
import { JwtService } from '@nestjs/jwt';
import { ResidentService } from 'src/resident/resident.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly resident: ResidentService,
        private readonly JwtService: JwtService,
    ) {}

    async authenticate(dataLogin: AuthDto) {
        const user = await this.resident.findEmail(dataLogin.email);
        if (user) {
            const checkPassword = this.validatePassword(
                dataLogin.password,
                user.password,
            );
            return checkPassword
                ? this.generateToken(user.id, user?.name)
                : new UnauthorizedException();
        } else {
            return new UnauthorizedException();
        }
    }

    async verifyToken(token: string): Promise<object> {
        return this.JwtService.verify(token);
    }

    validatePassword(inputPassword: string, userPassword: string): boolean {
        return userPassword === inputPassword;
    }

    async generateToken(userID: number, userName: string) {
        const payload = { sub: userID, username: userName };
        const acess_token = await this.JwtService.signAsync(payload);
        return acess_token;
    }
}
