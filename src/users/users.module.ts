import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BooksModule } from 'src/books/books.module';

import {
  ClientsController,
  UsersController,
  ShoppingsController,
  ShoppingsItemsController,
} from './controllers';
import {
  ClientsService,
  UsersService,
  ShoppingsService,
  ShoppingsItemsService,
} from './services';
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
  controllers: [
    ClientsController,
    UsersController,
    ShoppingsController,
    ShoppingsItemsController,
  ],
  providers: [
    ClientsService,
    UsersService,
    ShoppingsService,
    ShoppingsItemsService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
