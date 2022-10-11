import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientEntity } from '../entities';
import { BookEntity } from '../../books/entities/book.entity';

import { UpdateClientDTO, CreateClientDTO } from '../dtos';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>,
  ) {}

  findAll() {
    return this.clientsRepository.find();
  }

  async findOne(id: number) {
    const client = await this.clientsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!client) throw new NotFoundException(`cliente no encontrado`);
    return client;
  }

  createOne(data: CreateClientDTO) {
    const newClient = this.clientsRepository.create(data);
    return this.clientsRepository.save(newClient);
  }

  async updateOne(id: number, updatedFields: UpdateClientDTO) {
    const client = await this.clientsRepository.findOne({ where: { id } });
    if (!client) throw new NotFoundException(`cliente no encontrado`);
    this.clientsRepository.merge(client, updatedFields);
    return this.clientsRepository.save(client);
  }

  async removeOne(id: number) {
    return this.clientsRepository.delete(id);
  }

  // books
  async addFavoriteBook(clientId: number, bookId: number) {
    const client = await this.clientsRepository.findOne({
      where: { id: clientId },
      relations: ['favoritesBooks'],
    });
    if (!client) throw new NotFoundException('cliente no encontrado');
    const book = await this.booksRepository.findOne({ where: { id: bookId } });
    if (!book) throw new NotFoundException('libro no encontrado');
    client.favoritesBooks.push(book);
    return this.clientsRepository.save(client);
  }

  async removeBookFromFavorites(clientId: number, bookId: number) {
    const client = await this.clientsRepository.findOne({
      where: { id: clientId },
      relations: ['favoritesBooks'],
    });
    if (!client) throw new NotFoundException('cliente no encontrado');
    const book = await this.booksRepository.findOne({ where: { id: bookId } });
    if (!book) throw new NotFoundException('libro no encontrado');
    client.favoritesBooks = client.favoritesBooks.filter(
      (book) => book.id !== bookId,
    );
    return this.clientsRepository.save(client);
  }
}
