import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export async function generateToken(
  jwtService: JwtService,
  configService: ConfigService,
  id: string,
) {
  const [access_token] = await Promise.all([
    jwtService.signAsync(
      { sub: id },
      { secret: configService.get<string>('ACCESS_KEY'), expiresIn: '100d' },
    ),
  ]);
  return { access_token: access_token };
}
