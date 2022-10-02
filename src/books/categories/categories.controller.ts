import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  HttpCode,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

import { CreateCategoryDTO, UpdateCategoryDTO } from './dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateCategoryDTO) {
    return body;
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDTO,
  ) {
    return { id, body };
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
