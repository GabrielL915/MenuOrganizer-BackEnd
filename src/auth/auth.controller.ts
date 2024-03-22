import { Controller, Post } from '@nestjs/common';
import { LoginUseCase } from './usecases/login.usecase';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly loginUsecase: LoginUseCase) {}

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  login() {
    return this.loginUsecase.execute();
  }
}
