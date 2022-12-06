import { SetMetadata } from '@nestjs/common';

// another way export const PUBLIC_DECORATOR = 'isPublic';
export const PUBLIC_DECORATOR = { KEY: 'isPublic' };

export const Public = () => SetMetadata(PUBLIC_DECORATOR.KEY, true);
