import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/auth/entities/user.entity';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { id },
    });

    return prismaUser ? User.fromPersistence(prismaUser) : null;
  }

  async findByUsername(username: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { user_name: username },
    });

    return prismaUser ? User.fromPersistence(prismaUser) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findUnique({
      where: { email },
    });

    return prismaUser ? User.fromPersistence(prismaUser) : null;
  }

  async findByUsernameOrEmail(user: string): Promise<User | null> {
    const prismaUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ user_name: user }, { email: user }],
      },
    });

    return prismaUser ? User.fromPersistence(prismaUser) : null;
  }

  async findAll(): Promise<User[]> {
    const prismaUserse = await this.prisma.user.findMany();

    return prismaUserse.map((user) => User.fromPersistence(user));
  }

  async create(user: User): Promise<User> {
    const prismaData = user.toPersistence();

    const createdPrismaUser = await this.prisma.user.create({
      data: prismaData,
    });

    return User.fromPersistence(createdPrismaUser);
  }

  async update(id: string, user: User): Promise<User> {
    const prismaUpdateData = user.toPersistence();

    const updatedPrismaUser = await this.prisma.user.update({
      where: { id },
      data: prismaUpdateData,
    });

    return User.fromPersistence(updatedPrismaUser);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
