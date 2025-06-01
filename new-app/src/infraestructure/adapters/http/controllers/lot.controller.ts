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
import { LotService } from '../../../../application/services/lot.service';
import { CreateLotDto } from 'src/application/dtos/lots/create-lot.dto';
import { UpdateLotDto } from 'src/application/dtos/lots/update-lot.dto';

@ApiTags('Lots')
@Controller('lots')
export class LotController {
  constructor(private readonly lotService: LotService) {}

  @Get()
  getLots() {
    return this.lotService.getLots();
  }

  @Get(':id')
  getLotById(@Param('id', ParseUUIDPipe) id: string) {
    return this.lotService.getLotById(id);
  }

  @Post()
  createLot(@Body() dto: CreateLotDto) {
    return this.lotService.createLot(dto);
  }

  @Put(':id')
  updateLot(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateLotDto) {
    return this.lotService.updateLot(id, dto);
  }

  @Delete(':id')
  deleteLot(@Param('id', ParseUUIDPipe) id: string) {
    return this.lotService.deleteLot(id);
  }
}
