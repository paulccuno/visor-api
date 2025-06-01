import { Lot } from '../entities/lot.entity';

export abstract class ILotRepository {
  abstract findById(id: string): Promise<Lot | null>;

  abstract findAll(): Promise<Lot[]>;

  abstract create(lot: Lot): Promise<Lot>;

  abstract update(id: string, lot: Lot): Promise<Lot>;

  abstract delete(id: string): Promise<void>;
}
