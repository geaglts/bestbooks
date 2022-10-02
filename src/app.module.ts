import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishersController } from './publishers/publishers.controller';
import { CategoriesController } from './categories/categories.controller';
import { UsersController } from './users/users.controller';
import { ShoppingsController } from './shoppings/shoppings.controller';
import { FavoritesController } from './favorites/favorites.controller';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './authors/authors.controller';
import { PublishersService } from './publishers/publishers.service';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    PublishersController,
    CategoriesController,
    UsersController,
    ShoppingsController,
    FavoritesController,
    BooksController,
    AuthorsController,
  ],
  providers: [AppService, PublishersService, CategoriesService],
})
export class AppModule {}
