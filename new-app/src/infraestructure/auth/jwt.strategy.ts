import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvironmentConfig } from '../config/environtment.config';
import { IUserRepository } from 'src/domain/auth/repositories/user.repository';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  private readonly logger: Logger;

  constructor(private readonly userRepository: IUserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: EnvironmentConfig.JWT_SECRET,
    });

    this.logger = new Logger(JwtStrategy.name);
  }

  async validate(payload: JwtPayload): Promise<JwtPayload> {
    const user = await this.userRepository.findByUsername(payload.username);

    if (!user)
      throw new UnauthorizedException('User not found or invalid token.');

    return {
      sub: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    };
  }
}
