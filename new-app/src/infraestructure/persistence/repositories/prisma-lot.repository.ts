import { Injectable } from '@nestjs/common';
import { ILotRepository } from 'src/domain/lot/repositories/lot.repository';
import { PrismaService } from '../prisma/prisma.service';
import { Lot } from 'src/domain/lot/entities/lot.entity';

@Injectable()
export class PrismaLotRepository implements ILotRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Lot | null> {
    const prismaLot = await this.prisma.lot.findUnique({
      where: { id },
    });

    return prismaLot ? Lot.fromPersistence(prismaLot) : null;
  }

  async findAll(): Promise<Lot[]> {
    const prismaLots = await this.prisma.lot.findMany();

    return prismaLots.map((lot) => Lot.fromPersistence(lot));
  }

  async create(lot: Lot): Promise<Lot> {
    const prismaData = lot.toPersistence();

    const createdPrismaLot = await this.prisma.lot.create({
      data: prismaData,
    });

    return Lot.fromPersistence(createdPrismaLot);
  }

  async update(id: string, lot: Lot): Promise<Lot> {
    const prismaUpdateData = lot.toPersistence();

    const updatedPrismaLot = await this.prisma.lot.update({
      where: { id },
      data: prismaUpdateData,
    });

    return Lot.fromPersistence(updatedPrismaLot);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.lot.delete({ where: { id } });
  }
}
