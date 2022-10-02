import { Module } from '@nestjs/common';

import { PublishersController, PublishersService } from './publishers';
import { CategoriesController, CategoriesService } from './categories';
import { AuthorsController, AuthorsService } from './authors';

@Module({
  imports: [],
  controllers: [PublishersController, CategoriesController, AuthorsController],
  providers: [PublishersService, CategoriesService, AuthorsService],
})
export class BooksModule {}
