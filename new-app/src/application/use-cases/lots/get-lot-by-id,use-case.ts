import { Injectable } from '@nestjs/common';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class GetLotByIdUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(id: number): Promise<object> {
    const lot = await this.lotRepository.findById(id);

    if (!lot) throw new Error(`Lot id ${id} not found.`);

    return lot;
  }
}
