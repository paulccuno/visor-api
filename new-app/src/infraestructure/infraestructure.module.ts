import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma/prisma.module';

const sharedModules = [PrismaModule];

@Module({
  imports: [...sharedModules],
  controllers: [],
  providers: [],
  exports: [...sharedModules],
})
export class InfraestructureModule {}
