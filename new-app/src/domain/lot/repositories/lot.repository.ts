export abstract class ILotRepository {
  abstract findById(id: number): Promise<object | null>;

  abstract findAll(): Promise<object[]>;

  abstract save(lot: object): Promise<object>;

  abstract update(lot: object): Promise<object>;

  abstract delete(id: number): Promise<void>;
}
