import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorsRepository.find();
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
