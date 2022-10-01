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

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll() {
    return 'ok';
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
