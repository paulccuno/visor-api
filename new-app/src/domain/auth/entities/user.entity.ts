import { Expose, instanceToPlain, plainToInstance } from 'class-transformer';
import { User as PrismaUser } from '@prisma/client';

export class User {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  username: string;

  @Expose()
  password: string;

  @Expose()
  createdBy: string;

  @Expose()
  updatedBy?: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt?: Date;

  @Expose()
  recordStatus: boolean;

  constructor(props: Partial<User>) {
    Object.assign(this, props);
  }

  public static fromPersistence(data: PrismaUser): User {
    const userInstance = plainToInstance(User, data, {
      exposeUnsetFields: false,
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    });

    return new User(userInstance);
  }

  public toPersistence(): PrismaUser {
    return instanceToPlain(this, {
      excludeExtraneousValues: true,
    }) as PrismaUser;
  }
}
