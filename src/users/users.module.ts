import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientsController, UsersController } from './controllers';
import { ClientsService, UsersService } from './services';
import { ClientEntity, UserEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, UserEntity])],
  controllers: [ClientsController, UsersController],
  providers: [ClientsService, UsersService],
  exports: [],
})
export class UsersModule {}
