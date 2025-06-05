import { Module } from '@nestjs/common';
import { LotModule } from './modules/lot.module';
import { PrismaModule } from './infraestructure/persistence/prisma/prisma.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [PrismaModule, AuthModule, LotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
