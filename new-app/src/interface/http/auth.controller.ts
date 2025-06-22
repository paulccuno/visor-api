import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto, RegisterUserDto } from 'src/application/dtos/auth';
import { LoginUserUseCase, RegisterUserUseCase } from 'src/application/use-cases/auth';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUseCase: RegisterUserUseCase,
    private readonly loginUserUserCase: LoginUserUseCase,
  ) {}

  @Post('/register')
  register(@Body() dto: RegisterUserDto) {
    return this.registerUseCase.execute(dto);
  }

  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    return this.loginUserUserCase.execute(dto);
  }
}
