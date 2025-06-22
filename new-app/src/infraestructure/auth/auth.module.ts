import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EnvironmentConfig } from '../config/environtment.config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: EnvironmentConfig.JWT_SECRET,
        signOptions: {
          expiresIn: EnvironmentConfig.JWT_EXPIRATION,
        },
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [JwtModule],
})
export class AuthModule {}
