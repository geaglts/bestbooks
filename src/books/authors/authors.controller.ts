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
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// auth
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleModel } from 'src/auth/models/role.model';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';
import { AuthorsService } from './authors.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorsService) {}

  @Public()
  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findOne(id);
  }

  @Roles(RoleModel.ADMIN)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateAuthorDTO) {
    return this.authorsService.createOne(body);
  }

  @Roles(RoleModel.ADMIN)
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateAuthorDTO) {
    return this.authorsService.updateOne(id, body);
  }

  @Roles(RoleModel.ADMIN)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.removeOne(id);
  }
}
