import { Injectable, NotFoundException } from '@nestjs/common';
import { Publisher } from './entities/publisher.entity';
import { CreatePublisherDTO, UpdatePublisherDTO } from './dtos';

@Injectable()
export class PublishersService {
  private publisherId = 1;
  private publishers: Publisher[] = [
    { id: 1, name: 'variedades', short_name: 'vari' },
  ];

  findAll() {
    return this.publishers;
  }

  findOne(publisherId: number) {
    const publisher = this.publishers.find(({ id }) => id === publisherId);
    if (!publisher) {
      throw new NotFoundException(
        `Publisher with id=${publisherId} not was found`,
      );
    }
    return publisher;
  }

  addOne(publisherData: CreatePublisherDTO) {
    const newId = ++this.publisherId;
    const newPublisher = { id: newId, ...publisherData };
    this.publishers.push(newPublisher);
    return newPublisher;
  }

  updateOne(publisherId: number, fieldsToUpdate: UpdatePublisherDTO) {
    const publisherIndex = this.publishers.findIndex(
      ({ id }) => id === publisherId,
    );
    if (publisherIndex < 0) {
      throw new NotFoundException(
        `Publisher with id=${publisherId} not was found`,
      );
    }
    this.publishers[publisherIndex] = {
      ...this.publishers[publisherIndex],
      ...fieldsToUpdate,
    };
    return this.publishers[publisherIndex];
  }

  removeOne(publisherId: number) {
    this.publishers = this.publishers.filter(({ id }) => id !== publisherId);
    return publisherId;
  }
}
