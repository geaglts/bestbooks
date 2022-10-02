import { Injectable } from '@nestjs/common';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';

@Injectable()
export class AuthorsService {
  findAll() {
    return { status: 'ok' };
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
