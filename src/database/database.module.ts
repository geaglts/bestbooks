import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'GLOBAL_KEY',
      useValue: 'hi this is a key, or not?',
    },
  ],
  exports: ['GLOBAL_KEY'],
})
export class DatabaseModule {}
