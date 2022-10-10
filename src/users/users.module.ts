import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientsController, UsersController } from './controllers';
import { ClientsService } from './services';
import { ClientEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  controllers: [ClientsController, UsersController],
  providers: [ClientsService],
  exports: [],
})
export class UsersModule {}
