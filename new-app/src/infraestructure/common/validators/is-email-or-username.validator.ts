import {
  isEmail,
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isEmailOrUsername', async: false })
export class IsEmailOrUsernameConstraint
  implements ValidatorConstraintInterface
{
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    if (typeof value !== 'string' || value.length === 0) return false;

    const isValidEmail = isEmail(value);
    const isValidUsername = true;

    return isValidEmail || isValidUsername;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'El valor debe ser un email valido o un nombre de usario valido.';
  }
}

export function IsEmailOrUsername(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailOrUsernameConstraint,
    });
  };
}
