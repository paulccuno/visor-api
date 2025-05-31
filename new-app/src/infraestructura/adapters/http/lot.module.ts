import { ILotRepository } from '../../../domain/lot/repositories/lot.repository';
import { Module } from '@nestjs/common';
import { LotController } from './controllers/lot.controller';
import { LotService } from 'src/application/services/lot.service';
import { GetLotsUseCase } from 'src/application/use-cases/lots/get-lots.use-case';
import { GetLotByIdUseCase } from 'src/application/use-cases/lots/get-lot-by-id,use-case';
import { PrismaLotRepository } from 'src/infraestructura/persistence/repositories/prisma-lot.repository';
import { CreateLotUseCase } from 'src/application/use-cases/lots/create-lot.use-case';
import { UpdateLotUseCase } from 'src/application/use-cases/lots/update-lot.use-case';
import { DeleteLotUseCase } from 'src/application/use-cases/lots/delete-lot.use-case';

@Module({
  imports: [],
  controllers: [LotController],
  providers: [
    LotService,
    GetLotsUseCase,
    GetLotByIdUseCase,
    CreateLotUseCase,
    UpdateLotUseCase,
    DeleteLotUseCase,
    { provide: ILotRepository, useClass: PrismaLotRepository },
  ],
  exports: [LotService],
})
export class LotModule {}
