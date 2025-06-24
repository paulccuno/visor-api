import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/application/dtos/auth/register-user.dto';
import { User } from 'src/domain/auth/entities/user.entity';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: RegisterUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const newUser = new User({
      ...dto,
      password: hashedPassword,
      createdBy: dto.username,
    });

    const userCreated = await this.userRepository.create(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = userCreated;

    return user;
  }
}
