import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BooksModule } from 'src/books/books.module';

import {
  ClientsController,
  UsersController,
  ShoppingsController,
} from './controllers';
import { ClientsService, UsersService, ShoppingsService } from './services';
import {
  ClientEntity,
  UserEntity,
  ShoppingEntity,
  ShoppingItemEntity,
} from './entities';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forFeature([
      ClientEntity,
      UserEntity,
      ShoppingEntity,
      ShoppingItemEntity,
    ]),
  ],
  controllers: [ClientsController, UsersController, ShoppingsController],
  providers: [ClientsService, UsersService, ShoppingsService],
  exports: [],
})
export class UsersModule {}
