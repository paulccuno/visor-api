import { Expose, instanceToPlain, plainToInstance } from 'class-transformer';
import { Lot as PrismaLot } from '@prisma/client';

export class Lot {
  @Expose({ name: 'id' })
  public readonly id: string;

  @Expose({ name: 'block' })
  public block: string;

  @Expose({ name: 'lot' })
  public lot: number;

  @Expose({ name: 'area' })
  public area: number;

  @Expose({ name: 'price_x_m2' })
  public pricePerm2: number;

  @Expose({ name: 'total_price' })
  public totalPrice: number;

  @Expose({ name: 'availability_status_id' })
  public availabilityStatusId: number;

  @Expose({ name: 'price_visibility' })
  public priceVisibility: boolean;

  @Expose({ name: 'created_by' })
  public createdBy: string;

  @Expose({ name: 'updated_by' })
  public updatedBy?: string;

  @Expose({ name: 'created_at' })
  public createdAt: Date;

  @Expose({ name: 'updated_at' })
  public updatedAt?: Date;

  @Expose({ name: 'record_status' })
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
