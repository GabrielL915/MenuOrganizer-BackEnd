import { Injectable } from '@nestjs/common';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { CreateLoginDto } from './dto/create-login.dto.';
import { AuthRepository } from './repository/auth.repository';
import { hashPassword } from 'src/shared/utils/hash-password';
import { validateUser } from 'src/shared/utils/validate-user';
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

  async cadastro(input: CreateCadastroDto) {
    const hashedPassword = hashPassword(input.password);
    return await this.authRepository.createUser({
      ...input,
      password: hashedPassword,
    });
  }

  async login(input: CreateLoginDto) {
    const user = await validateUser(
      this.authRepository,
      input.username,
      input.password,
    );
    const payload = { username: user.username, sub: user.id };
    const token = generateToken(
      this.jwtService,
      this.configService,
      payload.sub,
      payload.username,
    );
    return token;
  }
}
