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

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorEntity, CategoryEntity, PublisherEntity]),
  ],
  controllers: [PublishersController, CategoriesController, AuthorsController],
  providers: [PublishersService, CategoriesService, AuthorsService],
})
export class BooksModule {}
