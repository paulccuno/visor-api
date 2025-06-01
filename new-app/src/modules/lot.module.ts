import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';
import { Module } from '@nestjs/common';
import { LotController } from 'src/infraestructure/adapters/http/controllers/lot.controller';
import { LotService } from 'src/application/services/lot.service';
import { GetLotsUseCase } from 'src/application/use-cases/lots/get-lots.use-case';
import { GetLotByIdUseCase } from 'src/application/use-cases/lots/get-lot-by-id.use-case';
import { PrismaLotRepository } from 'src/infraestructure/persistence/repositories/prisma-lot.repository';
import { CreateLotUseCase } from 'src/application/use-cases/lots/create-lot.use-case';
import { UpdateLotUseCase } from 'src/application/use-cases/lots/update-lot.use-case';
import { DeleteLotUseCase } from 'src/application/use-cases/lots/delete-lot.use-case';
import { PrismaModule } from 'src/infraestructure/persistence/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
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
