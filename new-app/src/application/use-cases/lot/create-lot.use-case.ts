import { Injectable } from '@nestjs/common';
import { CreateLotDto } from 'src/application/dtos/lot/create-lot.dto';
import { Lot } from 'src/domain/lot/entities/lot.entity';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class CreateLotUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(dto: CreateLotDto): Promise<object> {
    const newLot = new Lot(dto);

    const lotCreated = await this.lotRepository.create(newLot);

    return lotCreated;
  }
}
