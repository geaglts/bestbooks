import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Request } from 'express';

import config from '../../config';

// keys
import { PUBLIC_DECORATOR } from '../decorators/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(config.KEY)
    private configVariables: ConfigType<typeof config>,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.get(
      PUBLIC_DECORATOR.KEY,
      context.getHandler(),
    );
    if (isPublic) return true;
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.header('api-key');
    const notHaveAccess = apiKey !== this.configVariables.auth.apiKey;
    if (notHaveAccess) {
      throw new UnauthorizedException(
        "Sorry, but you can't access to this route, please check your request, maybe not exist some required param, have a nice day ☀",
      );
    }
    return true;
  }
}
