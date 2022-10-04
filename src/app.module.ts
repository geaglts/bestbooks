import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ShoppingsController } from './users/shoppings/shoppings.controller';
import { FavoritesController } from './users/favorites/favorites.controller';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HttpModule, BooksModule, UsersModule],
  controllers: [
    AppController,
    UsersController,
    ShoppingsController,
    FavoritesController,
    BooksController,
  ],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: 'shit this is an API key?',
    },
    {
      // Permite hacer metodos asincronos.
      // Solo se ejecuta al cargar el server,
      // despues ya no se actualiza aunque recarguemos la pagina
      provide: 'RANDOM_KEY',
      useFactory: async (http: HttpService) => {
        const API_URL = 'https://key-generator.fly.dev';
        const { data } = await firstValueFrom(
          http.get(`${API_URL}/api/v1/key-generator/random-key?size=16`),
        );
        return data.key;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
