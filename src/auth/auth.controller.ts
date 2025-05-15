import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthDto';
import { Request, Response } from 'express';
import { TokenExpiredError } from '@nestjs/jwt';

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
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60,
        });
    }

    @Post('/check-token')
    async checkToken(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ) {
        const token: string = req?.cookies?.token as string;
        try {
            if (token) {
                const user = await this.authService.verifyToken(token);
                return user;
            }
        } catch (Error) {
            if (Error instanceof TokenExpiredError)
                res.clearCookie('token', {
                    httpOnly: true,
                    sameSite: 'lax',
                });
            return { message: 'token expirado' };
        }
    }

    @Post('/logout')
    logout(@Res({ passthrough: true }) res: Response) {
        return res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'lax',
        });
    }
}
