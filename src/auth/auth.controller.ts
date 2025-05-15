import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthDto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async authenticateUser(
        @Body() dataLogin: AuthDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const token = await this.authService.authenticate(dataLogin);
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
        });
    }
}
