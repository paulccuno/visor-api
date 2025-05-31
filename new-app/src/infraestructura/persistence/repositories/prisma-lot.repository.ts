import { Injectable } from '@nestjs/common';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

@Injectable()
export class PrismaLotRepository implements ILotRepository {
  async findById(id: number): Promise<object | null> {
    return null;
  }

  async findAll(): Promise<object[]> {
    return [{}];
  }

  async save(lot: object): Promise<object> {
    return {};
  }

  async update(lot: object): Promise<object> {
    return {};
  }

  async delete(id: number): Promise<void> {
    return;
  }
}
