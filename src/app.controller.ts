import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ApiKeyGuard } from './auth/guards/api-key.guard';

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ApiKeyGuard)
  @ApiOperation({ summary: 'Base route' })
  getHello() {
    return this.appService.getHello();
  }
}
