import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateLotDto {
  @ApiProperty()
  @IsString()
  lot: string;

  @ApiProperty()
  @IsNumber()
  area: number;
}
