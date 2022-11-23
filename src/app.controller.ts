import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ApiKeyGuard } from './auth/guards/api-key.guard';
// custom decorators
import { Public } from './auth/decorators/public.decorator';

@ApiTags()
@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Base route' })
  getHello() {
    return this.appService.getHello();
  }

  @Public()
  @Get('personas')
  getPersonas() {
    return ['miguel', 'maria', 'juana'];
  }

  @Public()
  @Get('/gaticos')
  getGaticos() {
    return ['michifu', 'gato', 'gata', 'petrona'];
  }

  @Get('gaticos-premium')
  getGaticosPremium() {
    return [
      { name: 'cozy', age: 22, color: 'brown' },
      { name: 'brax', age: 18, color: 'white' },
      { name: 'sack', age: 24, color: 'black' },
    ];
  }
}
