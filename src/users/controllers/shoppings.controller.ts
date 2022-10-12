import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpCode,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ShoppingsService } from '../services';

@Controller('shoppings')
export class ShoppingsController {
  constructor(private shoppingsService: ShoppingsService) {}

  @Get()
  findAll() {
    return this.shoppingsService.findAll();
  }

  @Get('client/:clientId')
  findAllOfAUser(@Param('clientId', ParseIntPipe) clientId: number) {
    return this.shoppingsService.findAllOfAClient(clientId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  createOne(@Body() body) {
    return this.shoppingsService.createOne(body);
  }

  @Put(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.shoppingsService.updateOne(id, body);
  }

  @Delete(':id')
  removeOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingsService.removeOne(id);
  }
}
