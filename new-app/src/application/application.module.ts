import { Module, Provider } from '@nestjs/common';
import { SignInUseCase, SignUpUseCase } from './use-cases/auth';
import {
  CreateLotUseCase,
  DeleteLotUseCase,
  GetLotByIdUseCase,
  GetLotsUseCase,
  UpdateLotUseCase,
} from './use-cases/lot';
import { InfraestructureModule } from 'src/infraestructure/infraestructure.module';

const providers: Provider[] = [
  // Auth
  SignUpUseCase,
  SignInUseCase,

  // Lot
  CreateLotUseCase,
  GetLotsUseCase,
  GetLotByIdUseCase,
  UpdateLotUseCase,
  DeleteLotUseCase,
];

@Module({
  imports: [InfraestructureModule],
  controllers: [],
  providers: providers,
  exports: providers,
})
export class ApplicationModule {}
