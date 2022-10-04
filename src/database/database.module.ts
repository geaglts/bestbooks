import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'GLOBAL_KEY',
      useValue: 'this is a global key',
    },
  ],
  exports: ['GLOBAL_KEY'],
})
export class DatabaseModule {}
