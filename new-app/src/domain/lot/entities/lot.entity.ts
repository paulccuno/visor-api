import { Expose, instanceToPlain, plainToInstance } from 'class-transformer';
import { Lot as PrismaLot } from '@prisma/client';

export class Lot {
  @Expose()
  public readonly id: string;

  @Expose()
  public block: string;

  @Expose()
  public lot: number;

  @Expose()
  public area: number;

  @Expose()
  public pricePerm2: number;

  @Expose()
  public totalPrice: number;

  @Expose()
  public availabilityStatusId: number;

  @Expose()
  public priceVisibility: boolean;

  @Expose()
  public createdBy: string;

  @Expose()
  public updatedBy?: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public updatedAt?: Date;

  @Expose()
  public recordStatus: boolean;

  constructor(props: Partial<Lot>) {
    Object.assign(this, props);
  }

  public static fromPersistence(data: PrismaLot): Lot {
    const lotInstance = plainToInstance(Lot, data, {
      exposeUnsetFields: false,
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    });

    return new Lot(lotInstance);
  }

  public toPersistence(): PrismaLot {
    return instanceToPlain(this, {
      excludeExtraneousValues: true,
    }) as PrismaLot;
  }
}
