import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ShoppingsController } from './users/shoppings/shoppings.controller';
import { FavoritesController } from './users/favorites/favorites.controller';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

import config, { envValidation } from './config';
import { getEnvironments } from './environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvironments(process.env.NODE_ENV),
      isGlobal: true,
      load: [config],
      validationSchema: envValidation,
    }),
    BooksModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    UsersController,
    ShoppingsController,
    FavoritesController,
    BooksController,
  ],
  providers: [AppService],
})
export class AppModule {}
