import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

import { ROLE_DECORATOR_KEY } from '../decorators/roles.decorator';
import { RoleModel } from '../models/role.model';
import { TokenModel } from '../models/token.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<RoleModel[]>(
      ROLE_DECORATOR_KEY,
      context.getHandler(),
    );

    // if not exists roles then i dont need to check it
    if (!roles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as TokenModel;
    const userHasRoles = roles.some((role) => role === user.role);
    return userHasRoles;
  }
}
