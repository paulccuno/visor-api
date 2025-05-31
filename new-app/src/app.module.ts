import { Module } from '@nestjs/common';
import { LotModule } from './infraestructure/adapters/http/lot.module';

@Module({
  imports: [LotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
