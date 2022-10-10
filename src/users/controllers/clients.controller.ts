import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ClientsService } from '../services/clients.service';
import { CreateClientDTO, UpdateClientDTO } from '../dtos';

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  findAll() {
    return this.clientsService.findAll;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  createOne(@Body() body: CreateClientDTO) {
    return this.clientsService.createOne(body);
  }

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateClientDTO,
  ) {
    return this.clientsService.updateOne(id, body);
  }

  @Delete(':id')
  removeOne(@Param(':id', ParseIntPipe) id: number) {
    return this.clientsService.removeOne(id);
  }
}
