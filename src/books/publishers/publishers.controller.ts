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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// auth
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { RoleModel } from 'src/auth/models/role.model';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Public } from 'src/auth/decorators/public.decorator';

import { PublishersService } from './publishers.service';
import { CreatePublisherDTO, UpdatePublisherDTO } from './dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('publishers')
@Controller('publishers')
export class PublishersController {
  constructor(private publishersService: PublishersService) {}

  @Public()
  @Get()
  findAll() {
    return this.publishersService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.findOne(id);
  }

  @Roles(RoleModel.ADMIN)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreatePublisherDTO) {
    return this.publishersService.addOne(body);
  }

  @Roles(RoleModel.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePublisherDTO,
  ) {
    return this.publishersService.updateOne(id, body);
  }

  @Roles(RoleModel.ADMIN)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.publishersService.removeOne(id);
  }
}
