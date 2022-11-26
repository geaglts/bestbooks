import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './services/auth/auth.service';

import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
