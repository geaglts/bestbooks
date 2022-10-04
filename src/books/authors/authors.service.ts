import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('GLOBAL_KEY') private globalKey: string,
    // Variables de entorno con tipado
    @Inject(config.KEY) private configKeys: ConfigType<typeof config>,
  ) {}

  findAll() {
    return {
      status: 'ok',
      key: this.globalKey,
      configs: this.configKeys.globalKey,
    };
  }

  findOne(authorId: number) {
    return { status: 'ok', authorId };
  }

  createOne(authorData: CreateAuthorDTO) {
    return { status: 'ok', authorData };
  }

  updateOne(authorId: number, fieldsToUpdate: UpdateAuthorDTO) {
    return { status: 'ok', authorId, fieldsToUpdate };
  }

  removeOne(authorId: number) {
    return { status: 'ok', authorId };
  }
}
