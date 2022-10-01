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

import { PublishersService } from './publishers.service';

@Controller('publishers')
export class PublishersController {
  constructor(private publishersService: PublishersService) {}

  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishersService.findOne(parseInt(id, 10));
  }

  @Post()
  @HttpCode(201)
  create(@Body() body) {
    return this.publishersService.addOne(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.publishersService.updateOne(parseInt(id, 10), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.publishersService.removeOne(parseInt(id, 10));
  }
}
