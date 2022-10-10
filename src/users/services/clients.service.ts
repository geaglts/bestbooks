import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientEntity } from '../entities';
import { UpdateClientDTO, CreateClientDTO } from '../dtos';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
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
}
