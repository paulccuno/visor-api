import { Injectable } from '@nestjs/common';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class GetLotsUseCase {
  constructor(private readonly lotRepository: ILotRepository) {}

  async execute(): Promise<object[]> {
    const lots = await this.lotRepository.findAll();

    return lots;
  }
}
