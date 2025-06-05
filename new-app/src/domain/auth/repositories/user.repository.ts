import { User } from '../entities/user.entity';

export abstract class IUserRepository {
  abstract findById(id: string): Promise<User | null>;

  abstract findByUsername(username: string): Promise<User | null>;

  abstract findByEmail(email: string): Promise<User | null>;

  abstract findAll(): Promise<User[]>;

  abstract create(user: User): Promise<User>;

  abstract update(id: string, user: User): Promise<User>;

  abstract delete(id: string): Promise<void>;
}
