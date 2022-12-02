import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

// external modules
import { UsersModule } from '../users/users.module';

// config environment
import config from '../config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { auth } = configService;
        return {
          secret: auth.jwtSecret,
          signOptions: { expiresIn: '1d' },
        };
      },
      inject: [config.KEY],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [],
})
export class AuthModule {}
