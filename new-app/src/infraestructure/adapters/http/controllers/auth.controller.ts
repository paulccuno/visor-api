import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/application/services/auth.service';
import { SignInDto } from 'src/application/dtos/auth/sign-in.dto';
import { SignUpDto } from 'src/application/dtos/auth/sign-up.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('/signin')
  signIn(@Body() dto: SignInDto) {
    return this.authService.signIn(dto);
  }
}
