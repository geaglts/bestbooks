import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PublishersController, PublishersService } from './publishers';
import { CategoriesController, CategoriesService } from './categories';
import { AuthorsController, AuthorsService, AuthorEntity } from './authors';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [PublishersController, CategoriesController, AuthorsController],
  providers: [PublishersService, CategoriesService, AuthorsService],
})
export class BooksModule {}
