import { HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/application/dtos/auth/login-user.dto';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import { AppException } from 'src/infraestructure/common/exceptions/app.exception';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/infraestructure/auth/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginUserDto) {
    const user = await this.userRepository.findByUsernameOrEmail(dto.user);

    if (!user)
      throw new AppException('User not found', HttpStatus.UNAUTHORIZED);

    if (!(await bcrypt.compare(dto.password, user.password)))
      throw new AppException('Invalid password', HttpStatus.UNAUTHORIZED);

    const payload: JwtPayload = {
      sub: user.id,
      name: user.name,
      username: user.userName,
      email: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
