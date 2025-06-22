import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsStrongPassword } from 'class-validator';
import { IsEmailOrUsername } from 'src/infraestructure/common/validators/is-email-or-username.validator';

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  @IsEmailOrUsername()
  user: string;

  @ApiProperty()
  @IsString()
  @IsStrongPassword()
  password: string;
}
