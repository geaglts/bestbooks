import { Injectable } from '@nestjs/common';

import { CreateShoppingDTO, UpdateShoppingDTO } from '../dtos';

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

  createOne(data: CreateShoppingDTO) {
    return { data };
  }

  updateOne(id: number, fieldsToUpdate: UpdateShoppingDTO) {
    return { id, fieldsToUpdate };
  }

  removeOne(id: number) {
    return { id };
  }
}
