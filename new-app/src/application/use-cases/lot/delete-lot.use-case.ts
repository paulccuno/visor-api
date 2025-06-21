import { Injectable } from '@nestjs/common';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';
import { AppException } from 'src/infraestructure/common/exceptions/app.exception';

@Injectable()
export class DeleteLotUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(id: string) {
    const lot = await this.lotRepository.findById(id);

    if (!lot) throw new AppException(`Lot id ${id} not found.`);

    await this.lotRepository.delete(id);
  }
}
