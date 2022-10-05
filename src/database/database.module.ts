import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';

import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { postgres } = configService;
        return {
          type: 'postgres',
          host: postgres.dbHost,
          port: postgres.dbPort,
          username: postgres.dbUsername,
          password: postgres.dbPassword,
          database: postgres.dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
