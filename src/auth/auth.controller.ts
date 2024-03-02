import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDTO } from './dto/register.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() registerData: registerDTO) {
    return this.authService.register(registerData);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Req() req: Request) {
    return this.authService.UserLogin({
      id: req.user['id'],
      username: req.user['username'],
    });
  }
}
