import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './repository/auth.repository';
import { AuthRepositoryImpl } from './repository/auth.repositoryImpl';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/acces-token.strategy';
import { LoginUseCase } from './usecases/login.usecase';
import { RedisAuthRepository } from './repository/cache/redis-auth.repository';
@Module({
  imports: [
    JwtModule.register({}),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LoginUseCase,
    AccessTokenStrategy,
    {
      provide: AuthRepository,
      useClass: RedisAuthRepository,
    },
    AuthRepositoryImpl,
  ],
})
export class AuthModule {}
