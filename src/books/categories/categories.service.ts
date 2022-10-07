import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dtos';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(categoryId: number) {
    const category = await this.categoriesRepository.findOne({
      where: {
        id: categoryId,
      },
      relations: ['books'],
      select: { books: { id: true, name: true, publication_year: true } },
    });
    if (!category) throw new NotFoundException(`Categoria no encontrada`);
    return category;
  }

  createOne(categoryData: CreateCategoryDTO) {
    const newCategory = this.categoriesRepository.create(categoryData);
    return this.categoriesRepository.save(newCategory);
  }

  async updateOne(categoryId: number, fieldsToUpdate: UpdateCategoryDTO) {
    const category = await this.categoriesRepository.findOneBy({
      id: categoryId,
    });
    if (!category) throw new NotFoundException(`Categoria no encontrada`);
    this.categoriesRepository.merge(category, fieldsToUpdate);
    return this.categoriesRepository.save(category);
  }

  async removeOne(categoryId: number) {
    return this.categoriesRepository.delete(categoryId);
  }
}
