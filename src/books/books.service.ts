import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from './entities/book.entity';
import { CreateBookDTO, UpdateBookDTO } from './dtos';

// services
import { PublishersService } from './publishers';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>,
    private publishersService: PublishersService,
  ) {}

  findAll() {
    return this.booksRepository.find({
      relations: ['publisher'],
      select: { publisher: { id: true, name: true, short_name: true } },
    });
  }

  async findOne(id: number) {
    const book = await this.booksRepository.findOne({
      where: { id },
      relations: ['publisher'],
      select: { publisher: { id: true, name: true, short_name: true } },
    });
    if (!book) throw new NotFoundException('Libro no encontrado');
    return book;
  }

  async createOne(bookData: CreateBookDTO) {
    const newBook = this.booksRepository.create(bookData);
    if (bookData.publisherId) {
      const publisher = await this.publishersService.getPublisher(
        bookData.publisherId,
      );
      newBook.publisher = publisher;
    }
    return this.booksRepository.save(newBook);
  }

  async updateOne(bookId: number, fieldsToUpdate: UpdateBookDTO) {
    const book = await this.booksRepository.findOneBy({ id: bookId });
    if (!book) throw new NotFoundException('Libro no encontrado');
    if (fieldsToUpdate.publisherId) {
      const publisher = await this.publishersService.getPublisher(
        fieldsToUpdate.publisherId,
      );
      book.publisher = publisher;
    }
    this.booksRepository.merge(book, fieldsToUpdate);
    return this.booksRepository.save(book);
  }

  async removeOne(bookId: number) {
    return this.booksRepository.delete(bookId);
  }
}
