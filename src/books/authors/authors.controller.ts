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
} from '@nestjs/common';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() body: CreateAuthorDTO) {
    return this.authorsService.createOne(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateAuthorDTO) {
    return this.authorsService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.removeOne(id);
  }
}
