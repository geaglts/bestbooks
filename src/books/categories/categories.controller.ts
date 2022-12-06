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
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { RoleModel } from 'src/auth/models/role.model';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Public } from 'src/auth/decorators/public.decorator';

import { CategoriesService } from './categories.service';

import { CreateCategoryDTO, UpdateCategoryDTO } from './dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Public()
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Roles(RoleModel.ADMIN)
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateCategoryDTO) {
    return this.categoriesService.createOne(body);
  }

  @Roles(RoleModel.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDTO,
  ) {
    return this.categoriesService.updateOne(id, body);
  }

  @Roles(RoleModel.ADMIN)
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.removeOne(id);
  }
}
