import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/acces-token.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, AccessTokenStrategy],
})
export class AuthModule {}
