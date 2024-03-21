import { AuthRequestDto } from '../dto/auth-request.dto';
import { Auth } from '../entities/auth.entity';

export abstract class AuthRepository {
  abstract createUser(id: AuthRequestDto): Promise<Auth>;
  abstract findOne(id: string): Promise<Auth>;
}
