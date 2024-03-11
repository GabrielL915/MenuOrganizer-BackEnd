import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { CreateLoginDto } from './dto/create-login.dto.';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('cadastro')
  cadastro(@Body() input: CreateCadastroDto) {
    return this.authService.cadastro(input);
  }

  @Post('login')
  login(@Body() input: CreateLoginDto) {
    return this.authService.login(input);
  }

  @Get()
  profile() {
    return;
  }
}
