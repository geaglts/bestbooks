import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  HttpCode,
  Body,
  Param,
} from '@nestjs/common';

import { ParseIntPipe } from 'src/common/parse-int.pipe';

import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private publishersService: PublishersService) {}

  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() body) {
    return this.publishersService.addOne(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.publishersService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.removeOne(id);
  }
}
