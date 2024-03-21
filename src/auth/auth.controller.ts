import { Controller, Post } from '@nestjs/common';
import { LoginUseCase } from './usecases/login.usecase';
import { Public } from 'src/shared';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUsecase: LoginUseCase) {}

  @Public()
  @Post('login')
  login() {
    return this.loginUsecase.execute();
  }
}
