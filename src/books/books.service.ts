import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './entities/book.entity';
import { CreateBookDTO, UpdateBookDTO } from './dtos';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>,
  ) {}

  findAll() {
    return this.booksRepository.find();
  }

  async findOne() {
    return '';
  }

  createOne() {
    return '';
  }

  async updateOne() {
    return '';
  }

  async removeOne() {
    return '';
  }
}
