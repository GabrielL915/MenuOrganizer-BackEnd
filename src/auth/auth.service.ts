import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { generateToken, generateUUID } from 'src/shared';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login() {
    const id = generateUUID();
    const user = await this.validateUser(id);
    const payload = { sub: user.id };
    const token = generateToken(
      this.jwtService,
      this.configService,
      payload.sub,
    );
    return token;
  }

  private async validateUser(id: string) {
    const user = await this.authRepository.findOne(id);
    if (!user) {
      return await this.authRepository.createUser({ id: id });
    }
    return user;
  }
}
