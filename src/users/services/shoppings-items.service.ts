import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BookEntity } from 'src/books/entities/book.entity';
import { ShoppingItemEntity, ShoppingEntity } from '../entities';
import { CreateShoppingItemDTO, UpdateShoppingItemDTO } from '../dtos';

@Injectable()
export class ShoppingsItemsService {
  constructor(
    @InjectRepository(ShoppingItemEntity)
    private shoppingsItemsRepository: Repository<ShoppingItemEntity>,
    @InjectRepository(ShoppingEntity)
    private shoppingsRepository: Repository<ShoppingEntity>,
    @InjectRepository(BookEntity)
    private booksRepository: Repository<BookEntity>,
  ) {}

  findAll(shoppingId: number) {
    return this.shoppingsItemsRepository.find({
      where: { shopping: { id: shoppingId } },
      relations: ['book'],
    });
  }

  findOne(shoppingItem: number) {
    return this.shoppingsItemsRepository.findOne({
      where: { id: shoppingItem },
      relations: ['book'],
    });
  }

  async createOne(data: CreateShoppingItemDTO) {
    const shoppingItem = this.shoppingsItemsRepository.create({
      quantity: data.quantity,
    });

    if (data.bookId) {
      const book = await this.booksRepository.findOne({
        where: { id: data.bookId },
      });
      if (!book) throw new NotFoundException('libro no encontrado');
      shoppingItem.book = book;
    }

    if (data.shoppingId) {
      const shopping = await this.shoppingsRepository.findOne({
        where: { id: data.shoppingId },
      });
      if (!shopping) throw new NotFoundException('compra no encontrada');
      shoppingItem.shopping = shopping;
    }

    return this.shoppingsItemsRepository.save(shoppingItem);
  }

  async updateOne(
    shoppingItemId: number,
    fieldsToUpdate: UpdateShoppingItemDTO,
  ) {
    const shoppingItem = await this.shoppingsItemsRepository.findOne({
      where: { id: shoppingItemId },
    });

    if (fieldsToUpdate.bookId) {
      const book = await this.booksRepository.findOne({
        where: { id: fieldsToUpdate.bookId },
      });
      if (!book) throw new NotFoundException('libro no encontrado');
      shoppingItem.book = book;
    }

    if (fieldsToUpdate.shoppingId) {
      const shopping = await this.shoppingsRepository.findOne({
        where: { id: fieldsToUpdate.shoppingId },
      });
      if (!shopping) throw new NotFoundException('compra no encontrada');
      shoppingItem.shopping = shopping;
    }

    this.shoppingsItemsRepository.merge(shoppingItem, {
      quantity: fieldsToUpdate.quantity,
    });

    return this.shoppingsItemsRepository.save(shoppingItem);
  }

  removeOne(id: number) {
    return this.shoppingsItemsRepository.delete(id);
  }
}
