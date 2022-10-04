import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('GLOBAL_KEY') private globalKey: string,
    private configs: ConfigService,
  ) {}

  findAll() {
    return {
      status: 'ok',
      key: this.globalKey,
      configs: this.configs.get('GLOBAL_KEY'),
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
