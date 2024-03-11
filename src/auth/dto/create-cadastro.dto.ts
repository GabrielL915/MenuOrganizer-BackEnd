import { IsString, MinLength } from 'class-validator';

export class CreateCadastroDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
