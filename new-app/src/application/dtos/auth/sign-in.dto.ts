import { IsString, IsStrongPassword } from 'class-validator';
import { IsEmailOrUsername } from 'src/infraestructure/common/validators/is-email-or-username.validator';

export class SignInDto {
  @IsString()
  @IsEmailOrUsername()
  user: string;

  @IsString()
  @IsStrongPassword()
  password: string;
}
