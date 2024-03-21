import { Controller, Post } from '@nestjs/common';
import { LoginUseCase } from './usecases/login.usecase';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUsecase: LoginUseCase) {}

  @Post('login')
  login() {
    return this.loginUsecase.execute();
  }
}
