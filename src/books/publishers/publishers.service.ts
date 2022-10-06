import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { Publisher } from './entities/publisher.entity';
import { CreatePublisherDTO, UpdatePublisherDTO } from './dtos';

@Injectable()
export class PublishersService {
  constructor(
    @InjectRepository(Publisher)
    private publishersRepository: Repository<Publisher>,
  ) {}

  findAll() {
    return this.publishersRepository.find();
  }

  async findOne(publisherId: number) {
    const query: FindOptionsWhere<Publisher> = { id: publisherId };
    const publisher = await this.publishersRepository.findOneBy(query);
    if (!publisher) throw new NotFoundException(`Editorial no encontrada`);
    return publisher;
  }

  addOne(publisherData: CreatePublisherDTO) {
    const newPublisher = this.publishersRepository.create(publisherData);
    return this.publishersRepository.save(newPublisher);
  }

  async updateOne(publisherId: number, fieldsToUpdate: UpdatePublisherDTO) {
    const query = { id: publisherId };
    const publisher = await this.publishersRepository.findOneBy(query);
    if (!publisher) throw new NotFoundException(`Editorial no encontrada`);
    this.publishersRepository.merge(publisher, fieldsToUpdate);
    return this.publishersRepository.save(publisher);
  }

  async removeOne(publisherId: number) {
    const query = { id: publisherId };
    const publisher = await this.publishersRepository.findOneBy(query);
    if (!publisher) throw new NotFoundException(`Editorial no encontrada`);
    return this.publishersRepository.delete(publisher);
  }
}
