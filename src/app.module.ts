import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishersController } from './books/publishers/publishers.controller';
import { CategoriesController } from './books/categories/categories.controller';
import { UsersController } from './users/users.controller';
import { ShoppingsController } from './users/shoppings/shoppings.controller';
import { FavoritesController } from './users/favorites/favorites.controller';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './books/authors/authors.controller';
import { PublishersService } from './books/publishers/publishers.service';
import { CategoriesService } from './books/categories/categories.service';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule, UsersModule],
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
