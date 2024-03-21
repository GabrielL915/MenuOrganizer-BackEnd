import { Injectable } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { UseCase, access_token } from 'src/shared';

@Injectable()
export class LoginUseCase implements UseCase<void, access_token> {
  constructor(private readonly authService: AuthService) {}

  async execute(): Promise<access_token> {
    return this.authService.login();
  }
}
