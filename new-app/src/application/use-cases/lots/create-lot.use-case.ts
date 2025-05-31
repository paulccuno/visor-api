import { Injectable } from '@nestjs/common';
import { CreateLotDto } from 'src/application/dtos/lots/create-lot.dto';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class CreateLotUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(dto: CreateLotDto): Promise<object> {
    const newLot = { ...dto };

    const lotCreated = await this.lotRepository.save(newLot);

    return lotCreated;
  }
}
