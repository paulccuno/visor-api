import { Injectable } from '@nestjs/common';
import { UpdateLotDto } from 'src/application/dtos/lots/update-lot.dto';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class UpdateLotUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(id: number, dto: UpdateLotDto) {
    const lot = await this.lotRepository.findById(id);
    console.log(lot);

    if (!lot) throw new Error(`Lot id ${id} not found.`);

    const lotUpdated = {
      ...lot,
      ...dto,
    };

    await this.lotRepository.update(lotUpdated);

    return lotUpdated;
  }
}
