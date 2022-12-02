import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';
import { compare } from 'bcrypt';

import { TokenModel } from '../models/token.model';
import { UserEntity } from '../../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return false;
    const isThePassword = await compare(password, user.password);
    if (!isThePassword) return false;
    delete user.password;
    return user;
  }

  async login(user: UserEntity) {
    const payload: TokenModel = { sub: user.id, username: user.username };
    return { access_token: this.jwtService.sign(payload), user };
  }
}
