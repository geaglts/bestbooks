import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ShoppingsController } from './users/shoppings/shoppings.controller';
import { FavoritesController } from './users/favorites/favorites.controller';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BooksModule, UsersModule, DatabaseModule],
  controllers: [
    AppController,
    UsersController,
    ShoppingsController,
    FavoritesController,
    BooksController,
  ],
  providers: [AppService],
})
export class AppModule {}
