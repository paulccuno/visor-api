import { Injectable, Logger } from '@nestjs/common';
import { CreateLotDto } from '../dtos/lots/create-lot.dto';
import { CreateLotUseCase } from '../use-cases/lots/create-lot.use-case';
import { GetLotsUseCase } from '../use-cases/lots/get-lots.use-case';
import { UpdateLotDto } from '../dtos/lots/update-lot.dto';
import { UpdateLotUseCase } from '../use-cases/lots/update-lot.use-case';
import { DeleteLotUseCase } from '../use-cases/lots/delete-lot.use-case';
import { GetLotByIdUseCase } from '../use-cases/lots/get-lot-by-id.use-case';

@Injectable()
export class LotService {
  logger = new Logger('LotService');

  constructor(
    private readonly createLotUseCase: CreateLotUseCase,
    private readonly getLotsUseCase: GetLotsUseCase,
    private readonly getLotByIdUseCase: GetLotByIdUseCase,
    private readonly updateLotUseCase: UpdateLotUseCase,
    private readonly deleteLotUseCase: DeleteLotUseCase,
  ) {}

  async createLot(dto: CreateLotDto): Promise<object> {
    this.logger.log('Executing create lot operation.');

    return this.createLotUseCase.execute(dto);
  }

  async getLots(): Promise<object[]> {
    this.logger.log('Fetching lots.');

    return this.getLotsUseCase.execute();
  }

  async getLotById(id: string): Promise<object> {
    this.logger.log('Fetching lot by id');

    return this.getLotByIdUseCase.execute(id);
  }

  async updateLot(id: string, dto: UpdateLotDto): Promise<object> {
    this.logger.log('Executing update lot operation.');

    return this.updateLotUseCase.execute(id, dto);
  }

  async deleteLot(id: string): Promise<void> {
    this.logger.log('Executing delete lot operation.');

    return this.deleteLotUseCase.execute(id);
  }
}
