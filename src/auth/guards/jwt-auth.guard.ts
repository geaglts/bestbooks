import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

// decorators
import { PUBLIC_DECORATOR } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const { KEY } = PUBLIC_DECORATOR;
    const isPublic = this.reflector.get(KEY, context.getHandler());
    if (isPublic) return true;
    return super.canActivate(context);
  }
}
