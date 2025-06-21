import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLotDto, UpdateLotDto } from 'src/application/dtos/lots';
import {
  CreateLotUseCase,
  DeleteLotUseCase,
  GetLotByIdUseCase,
  GetLotsUseCase,
  UpdateLotUseCase,
} from 'src/application/use-cases/lot';

@ApiTags('Lots')
@Controller('lots')
export class LotController {
  constructor(
    private readonly getLotsUseCase: GetLotsUseCase,
    private readonly getLotByIdUseCase: GetLotByIdUseCase,
    private readonly createLotUseCase: CreateLotUseCase,
    private readonly updateLotUseCase: UpdateLotUseCase,
    private readonly deleteLotUseCase: DeleteLotUseCase,
  ) {}

  @Get()
  getLots() {
    return this.getLotsUseCase.execute();
  }

  @Get(':id')
  getLotById(@Param('id', ParseUUIDPipe) id: string) {
    return this.getLotByIdUseCase.execute(id);
  }

  @Post()
  createLot(@Body() dto: CreateLotDto) {
    return this.createLotUseCase.execute(dto);
  }

  @Put(':id')
  updateLot(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateLotDto) {
    return this.updateLotUseCase.execute(id, dto);
  }

  @Delete(':id')
  deleteLot(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteLotUseCase.execute(id);
  }
}
