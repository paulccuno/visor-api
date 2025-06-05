import { Injectable } from '@nestjs/common';
import { SignInDto } from 'src/application/dtos/auth/sign-in.dto';
import { User } from 'src/domain/auth/entities/user.entity';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';

@Injectable()
export class SignInUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: SignInDto) {
    const newUser = new User(dto);

    const userCreated = this.userRepository.create(newUser);

    return userCreated;
  }
}
