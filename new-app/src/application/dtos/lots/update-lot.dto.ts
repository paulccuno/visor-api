import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateLotDto {
  @ApiProperty()
  @IsString()
  lot: string;

  @ApiProperty()
  @IsBoolean()
  disponibility: boolean;

  @ApiProperty()
  @IsBoolean()
  visibility: boolean;

  @ApiProperty()
  @IsNumber()
  price: number;
}
