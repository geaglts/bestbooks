import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../users/services/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return false;
    const isThePassword = await compare(password, user.password);
    if (!isThePassword) return false;
    delete user.password;
    return user;
  }
}
