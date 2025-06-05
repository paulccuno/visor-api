import { Module } from '@nestjs/common';
import { AuthService } from 'src/application/services/auth.service';
import { SignInUseCase } from 'src/application/use-cases/auth/sign-in.use-case';
import { SignUpUseCase } from 'src/application/use-cases/auth/sign-up.use-case';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import { AuthController } from 'src/infraestructure/adapters/http/controllers/auth.controller';
import { PrismaModule } from 'src/infraestructure/persistence/prisma/prisma.module';
import { PrismaUserRepository } from 'src/infraestructure/persistence/repositories/prisma-user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    SignUpUseCase,
    SignInUseCase,
    { provide: IUserRepository, useClass: PrismaUserRepository },
  ],
  exports: [],
})
export class AuthModule {}
