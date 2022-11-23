import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.header('api-key');
    const notHaveAccess = apiKey !== 'secret';
    if (notHaveAccess) {
      throw new UnauthorizedException(
        "Sorry, but you can't access to this route, please check your request, maybe not exist some config",
      );
    }
    return true;
  }
}
