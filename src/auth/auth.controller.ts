import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthDto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    authenticateUser(@Body() dataLogin: AuthDto, res: Response) {
        const token = this.authService.authenticate(dataLogin);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
        });
    }
}
