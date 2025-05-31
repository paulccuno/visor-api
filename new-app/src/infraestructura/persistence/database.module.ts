import { Module } from '@nestjs/common';
import { PrismaClient } from './prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaClient],
  exports: [PrismaClient],
})
export class DatabaseModule {}
