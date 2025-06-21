import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';

const sharedModules = [HttpModule];

@Module({
  imports: [...sharedModules],
  controllers: [],
  providers: [],
  exports: [...sharedModules],
})
export class InterfaceModule {}
