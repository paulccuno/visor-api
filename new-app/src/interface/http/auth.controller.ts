import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto, SignUpDto } from 'src/application/dtos/auth';
import { SignInUseCase, SignUpUseCase } from 'src/application/use-cases/auth';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase,
  ) {}

  @Post('/signup')
  signUp(@Body() dto: SignUpDto) {
    return this.signUpUseCase.execute(dto);
  }

  @Post('/signin')
  signIn(@Body() dto: SignInDto) {
    return this.signInUseCase.execute(dto);
  }
}
