import { IsString } from 'class-validator';

export class AuthRequestDto {
  @IsString()
  id: string;
}
