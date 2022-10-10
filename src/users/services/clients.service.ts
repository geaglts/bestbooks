import { Injectable } from '@nestjs/common';
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
    return {};
  }

  findOne(id: number) {
    return { id };
  }

  createOne(data: CreateClientDTO) {
    return { data };
  }

  updateOne(id: number, updatedFields: UpdateClientDTO) {
    return { id, updatedFields };
  }

  removeOne(id: number) {
    return { id };
  }
}
