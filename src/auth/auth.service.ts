import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { generateToken } from 'src/shared/utils/generate-token';
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
    const id = 'b9495a3f-a01d-47f2-8039-83249463caee';
    const user = await this.validateUser(id);
    const payload = { sub: user.id };
    const token = generateToken(
      this.jwtService,
      this.configService,
      payload.sub,
    );
    return token;
  }

  async validateUser(id: string) {
    const user = await this.authRepository.findOne(id);
    if (!user) {
      return await this.authRepository.createUser({ id: id });
    }
    return user;
  }
}
