import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(bookId: number) {
    const book = await this.booksRepository.findOneBy({ id: bookId });
    if (!book) throw new NotFoundException('Libro no encontrado');
    return book;
  }

  createOne(bookData: CreateBookDTO) {
    const newBook = this.booksRepository.create(bookData);
    return this.booksRepository.save(newBook);
  }

  async updateOne(bookId: number, fieldsToUpdate: UpdateBookDTO) {
    const book = await this.booksRepository.findOneBy({ id: bookId });
    if (!book) throw new NotFoundException('Libro no encontrado');
    this.booksRepository.merge(book, fieldsToUpdate);
    return this.booksRepository.save(book);
  }

  async removeOne(bookId: number) {
    return this.booksRepository.delete(bookId);
  }
}
