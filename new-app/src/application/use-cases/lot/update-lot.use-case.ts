import { Injectable } from '@nestjs/common';
import { UpdateLotDto } from 'src/application/dtos/lot/update-lot.dto';
import { Lot } from 'src/domain/lot/entities/lot.entity';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';
import { AppException } from 'src/infraestructure/common/exceptions/app.exception';

@Injectable()
export class UpdateLotUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(id: string, dto: UpdateLotDto) {
    const lot = await this.lotRepository.findById(id);
    console.log(lot);

    if (!lot) throw new AppException(`Lot id ${id} not found.`);

    const lotUpdated = new Lot({
      ...lot,
      ...dto,
    });

    await this.lotRepository.update(id, lotUpdated);

    return lotUpdated;
  }
}
