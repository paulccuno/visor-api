import { Module, Provider } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import { PrismaLotRepository, PrismaUserRepository } from './repositories';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';

const providers: Provider[] = [
  PrismaService,
  {
    provide: IUserRepository,
    useClass: PrismaUserRepository,
  },
  {
    provide: ILotRepository,
    useClass: PrismaLotRepository,
  },
];

@Module({
  imports: [],
  controllers: [],
  providers: providers,
  exports: providers,
})
export class PrismaModule {}
