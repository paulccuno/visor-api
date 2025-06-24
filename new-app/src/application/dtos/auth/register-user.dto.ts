import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @IsStrongPassword()
  password: string;
}
