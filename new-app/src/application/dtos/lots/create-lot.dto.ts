import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLotDto {
  @ApiProperty()
  @IsString()
  lot: number;

  @ApiProperty()
  @IsNumber()
  area: number;
}
