import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';

const sharedModules = [PrismaModule, AuthModule];

@Module({
  imports: [...sharedModules],
  controllers: [],
  providers: [JwtStrategy],
  exports: [...sharedModules],
})
export class InfraestructureModule {}
