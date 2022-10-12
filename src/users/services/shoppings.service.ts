import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateShoppingDTO, UpdateShoppingDTO } from '../dtos';

import { ClientEntity, ShoppingEntity } from '../entities';

@Injectable()
export class ShoppingsService {
  constructor(
    @InjectRepository(ShoppingEntity)
    private shoppingsRepository: Repository<ShoppingEntity>,
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
  ) {}

  findAll() {
    return this.shoppingsRepository.find();
  }

  findAllOfAClient(clientId: number) {
    return this.shoppingsRepository.find({
      where: { client: { id: clientId } },
    });
  }

  findOne(id: number) {
    return this.shoppingsRepository.findOne({
      where: { id },
      relations: ['shoppingItems', 'shoppingItems.book'],
    });
  }

  async createOne(data: CreateShoppingDTO) {
    if (data.clientId) {
      const shopping = this.shoppingsRepository.create();
      const client = await this.clientsRepository.findOne({
        where: { id: data.clientId },
      });
      if (!client) throw new NotFoundException('cliente no encontrado');
      shopping.client = client;
      return this.shoppingsRepository.save(shopping);
    }
    throw new BadRequestException('verifica la información que estás mandando');
  }

  async updateOne(id: number, fieldsToUpdate: UpdateShoppingDTO) {
    const shopping = await this.shoppingsRepository.findOne({ where: { id } });
    if (!shopping) throw new NotFoundException('compra no encontrada');
    if (fieldsToUpdate.clientId) {
      const client = await this.clientsRepository.findOne({
        where: { id: fieldsToUpdate.clientId },
      });
      if (!client) throw new NotFoundException('cliente no encontrado');
      shopping.client = client;
    }
    return this.shoppingsRepository.save(shopping);
  }

  async removeOne(id: number) {
    return this.shoppingsRepository.delete(id);
  }
}
