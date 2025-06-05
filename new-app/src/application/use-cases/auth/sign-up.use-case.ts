import { Injectable } from '@nestjs/common';
import { SignUpDto } from 'src/application/dtos/auth/sign-up.dto';
import { User } from 'src/domain/auth/entities/user.entity';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: SignUpDto) {
    const newUser = new User({ ...dto, createdBy: dto.userName });

    const userCreated = this.userRepository.create(newUser);

    return userCreated;
  }
}
