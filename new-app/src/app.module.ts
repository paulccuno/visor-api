import { Module } from '@nestjs/common';
import { LotModule } from './modules/lot.module';
import { PrismaModule } from './infraestructure/persistence/prisma/prisma.module';

@Module({
  imports: [PrismaModule, LotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
