import { Injectable, Logger } from '@nestjs/common';
import { SignInDto } from '../dtos/auth/sign-in.dto';
import { SignInUseCase } from '../use-cases/auth/sign-in.use-case';
import { SignUpDto } from '../dtos/auth/sign-up.dto';
import { SignUpUseCase } from '../use-cases/auth/sign-up.use-case';

@Injectable()
export class AuthService {
  logger = new Logger('AuthService');

  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase,
  ) {}

  async signUp(dto: SignUpDto) {
    return this.signUpUseCase.execute(dto);
  }

  async signIn(dto: SignInDto) {
    return this.signInUseCase.execute(dto);
  }
}
