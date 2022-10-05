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
import { ApiTags } from '@nestjs/swagger';

import { CategoriesService } from './categories.service';

import { CreateCategoryDTO, UpdateCategoryDTO } from './dtos';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateCategoryDTO) {
    return this.categoriesService.createOne(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDTO,
  ) {
    return this.categoriesService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.removeOne(id);
  }
}
