import { IsString, MinLength } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  username: string;

  @MinLength(8)
  password: string;
}
