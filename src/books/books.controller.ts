import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BooksService } from './books.service';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksController) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return { id };
  }

  @Post()
  @HttpCode(201)
  create(@Body() body) {
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return { id, body };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return { id };
  }
}
