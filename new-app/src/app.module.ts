import { Module } from '@nestjs/common';
import { LotModule } from './infraestructura/adapters/http/lot.module';

@Module({
  imports: [LotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
