import { SetMetadata } from '@nestjs/common';

export const PUBLIC_DECORATOR = { KEY: 'isPublic' };

export const Public = () => SetMetadata(PUBLIC_DECORATOR.KEY, true);
