import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingsService {
  findAll() {
    return [];
  }

  findAllOfAClient(clientId: number) {
    return { clientId };
  }

  findOne(id: number) {
    return { id };
  }

  createOne(data) {
    return { data };
  }

  updateOne(id: number, fieldsToUpdate) {
    return { id, fieldsToUpdate };
  }

  removeOne(id: number) {
    return { id };
  }
}
