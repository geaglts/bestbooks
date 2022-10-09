import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

//entities
import { CategoryEntity } from './categories';
import { AuthorEntity } from './authors';
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
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
    @InjectRepository(AuthorEntity)
    private authorsRepository: Repository<AuthorEntity>,
  ) {}

  findAll() {
    return this.booksRepository.find({
      relations: ['publisher', 'authors'],
      order: { name: 'ASC' },
      select: {
        publisher: { id: true, name: true, short_name: true },
        authors: {
          id: true,
          name: true,
          last_name: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const book = await this.booksRepository.findOne({
      where: { id },
      relations: ['publisher', 'categories', 'authors'],
      select: {
        publisher: { id: true, name: true, short_name: true },
        authors: {
          id: true,
          name: true,
          last_name: true,
          second_last_name: true,
        },
        categories: { id: true, name: true },
      },
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
    if (bookData.categoriesIds) {
      const categories = await this.categoriesRepository.findBy({
        id: In(bookData.categoriesIds),
      });
      newBook.categories = categories;
    }
    if (bookData.authorsIds) {
      const authors = await this.authorsRepository.findBy({
        id: In(bookData.authorsIds),
      });
      newBook.authors = authors;
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

  // categories
  async addCategories(bookId: number, categoriesIds: number[]) {
    const categories = await this.categoriesRepository.find({
      where: { id: In(categoriesIds) },
    });
    const book = await this.booksRepository.findOne({
      where: { id: bookId },
      relations: ['categories'],
      select: { categories: { id: true } },
    });
    if (!book) throw new NotFoundException('No se encontro el libro');
    book.categories.push(...categories);
    return this.booksRepository.save(book);
  }

  async removeCategories(bookId: number, categoriesIds: number[]) {
    const book = await this.booksRepository.findOne({
      where: { id: bookId },
      relations: ['categories'],
    });
    if (!book) throw new NotFoundException('No se encontro el libro');
    book.categories = book.categories.filter(
      (category) => !categoriesIds.includes(category.id),
    );
    return this.booksRepository.save(book);
  }

  // authors
  async addAuthors(bookId: number, authorsIds: number[]) {
    const authors = await this.authorsRepository.find({
      where: { id: In(authorsIds) },
    });
    const book = await this.booksRepository.findOne({
      where: { id: bookId },
      relations: ['authors'],
      select: { authors: { id: true } },
    });
    if (!book) throw new NotFoundException('No se encontro el libro');
    book.authors.push(...authors);
    return this.booksRepository.save(book);
  }

  async removeAuthors(bookId: number, authorsIds: number[]) {
    const book = await this.booksRepository.findOne({
      where: { id: bookId },
      relations: ['authors'],
      select: {
        authors: { id: true },
      },
    });
    if (!book) throw new NotFoundException('No se encontro el libro');
    book.authors = book.authors.filter(
      (author) => !authorsIds.includes(author.id),
    );
    return this.booksRepository.save(book);
  }
}
