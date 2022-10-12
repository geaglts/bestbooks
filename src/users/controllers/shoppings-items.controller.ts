import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { ShoppingsItemsService } from '../services';
import { CreateShoppingItemDTO, UpdateShoppingItemDTO } from '../dtos';

@Controller('shoppings-items')
export class ShoppingsItemsController {
  constructor(private shoppingsItemsService: ShoppingsItemsService) {}

  @Get('all/:shoppingId')
  findAll(@Param('shoppingId', ParseIntPipe) shoppingId: number) {
    return this.shoppingsItemsService.findAll(shoppingId);
  }

  @Get(':shoppingItemId')
  findOne(@Param('shoppingItemId', ParseIntPipe) shoppingItemId: number) {
    return this.shoppingsItemsService.findOne(shoppingItemId);
  }

  @Post()
  @HttpCode(201)
  addItem(@Body() body: CreateShoppingItemDTO) {
    return this.shoppingsItemsService.createOne(body);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateShoppingItemDTO,
  ) {
    return this.shoppingsItemsService.updateOne(id, body);
  }

  @Delete(':id')
  removeOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingsItemsService.removeOne(id);
  }
}
