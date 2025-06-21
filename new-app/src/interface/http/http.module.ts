import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LotController } from './lot.controller';
import { ApplicationModule } from 'src/application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [AuthController, LotController],
  providers: [],
  exports: [],
})
export class HttpModule {}
