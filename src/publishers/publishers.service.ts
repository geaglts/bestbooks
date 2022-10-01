import { Injectable } from '@nestjs/common';

import { Publisher } from './entities/publisher.entity';

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
    return publisher;
  }

  addOne(publisherData) {
    const newId = ++this.publisherId;
    const newPublisher = { id: newId, ...publisherData };
    this.publishers.push(newPublisher);
    return newPublisher;
  }

  updateOne(publisherId: number, fieldsToUpdate) {
    const publisherIndex = this.publishers.findIndex(
      ({ id }) => id === publisherId,
    );
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
