import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// custom pipes
import { IntArrayPipe } from 'src/common/int-array.pipe';

import { BooksService } from './books.service';
import { CreateBookDTO, UpdateBookDTO, PaginationProductDTO } from './dtos';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(@Query() params: PaginationProductDTO) {
    return this.booksService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateBookDTO) {
    return this.booksService.createOne(body);
  }

  @Put(':id/categories')
  addCategories(
    @Param('id', ParseIntPipe) id: number,
    @Query('categories', IntArrayPipe) categoriesIds: number[],
  ) {
    return this.booksService.addCategories(id, categoriesIds);
  }

  @Put(':id/authors')
  addAuthors(
    @Param('id', ParseIntPipe) id: number,
    @Query('authors', IntArrayPipe) authorsIds: number[],
  ) {
    return this.booksService.addAuthors(id, authorsIds);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateBookDTO) {
    return this.booksService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.removeOne(id);
  }

  @Delete(':id/categories')
  deleteCategories(
    @Param('id', ParseIntPipe) id: number,
    @Query('categories', IntArrayPipe) categoriesIds: number[],
  ) {
    return this.booksService.removeCategories(id, categoriesIds);
  }

  @Delete(':id/authors')
  deleteAuthors(
    @Param('id', ParseIntPipe) id: number,
    @Query('authors', IntArrayPipe) authorsIds: number[],
  ) {
    return this.booksService.removeAuthors(id, authorsIds);
  }
}
