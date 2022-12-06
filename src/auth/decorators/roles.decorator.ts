import { SetMetadata } from '@nestjs/common';
import { RoleModel } from '../models/role.model';

export const ROLE_DECORATOR_KEY = 'roles';

export const Roles = (...roles: RoleModel[]) => {
  return SetMetadata(ROLE_DECORATOR_KEY, roles);
};
