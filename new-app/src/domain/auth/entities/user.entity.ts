import { Expose, instanceToPlain, plainToInstance } from 'class-transformer';
import { User as PrismaUser } from '@prisma/client';

export class User {
  @Expose({ name: 'id' })
  id: string;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'email' })
  email: string;

  @Expose({ name: 'user_name' })
  userName: string;

  @Expose({ name: 'password' })
  password: string;

  @Expose({ name: 'created_by' })
  createdBy: string;

  @Expose({ name: 'updated_by' })
  updatedBy?: string;

  @Expose({ name: 'created_at' })
  createdAt: Date;

  @Expose({ name: 'updated_at' })
  updatedAt?: Date;

  @Expose({ name: 'record_status' })
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
