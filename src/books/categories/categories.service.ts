import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dtos';

@Injectable()
export class CategoriesService {
  private id = 1;
  private categories: Category[] = [{ id: 1, name: 'terror' }];

  findAll() {
    return this.categories;
  }

  findOne(categoryId: number) {}

  createOne(categoryData: CreateCategoryDTO) {}

  updateOne(categoryId: number, fieldsToUpdate: UpdateCategoryDTO) {}

  removeOne(categoryId: number) {}
}
