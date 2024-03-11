import { timingSafeEqual } from 'crypto';
import { AuthRepository } from 'src/auth/repository/auth.repository';
import { hashPassword } from './hash-password';

export async function validateUser(
  authRepository: AuthRepository,
  username: string,
  password: string,
) {
  const user = await authRepository.findOne(username);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
}

function comparePassword(password: string, storedPassword: string): boolean {
  const [salt, hash] = storedPassword.split('.');
  const hashedInput = hashPassword(password, salt);
  return timingSafeEqual(
    Buffer.from(hashedInput.split('.')[1], 'hex'),
    Buffer.from(hash, 'hex'),
  );
}
