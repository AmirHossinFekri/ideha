import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDTO } from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() registerData: registerDTO) {
    return this.authService.register(registerData);
  }
}
