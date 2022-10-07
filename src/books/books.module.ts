import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  PublishersController,
  PublishersService,
  PublisherEntity,
} from './publishers';
import {
  CategoriesController,
  CategoriesService,
  CategoryEntity,
} from './categories';
import { AuthorsController, AuthorsService, AuthorEntity } from './authors';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookEntity } from './entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorEntity,
      CategoryEntity,
      PublisherEntity,
      BookEntity,
    ]),
  ],
  controllers: [
    BooksController,
    PublishersController,
    CategoriesController,
    AuthorsController,
  ],
  providers: [
    PublishersService,
    CategoriesService,
    AuthorsService,
    BooksService,
  ],
})
export class BooksModule {}
