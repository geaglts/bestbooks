import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Author } from './entities/author.entity';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dtos';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorsRepository: Repository<Author>,
  ) {}

  findAll() {
    return this.authorsRepository.find();
  }

  async findOne(authorId: number) {
    const author = await this.authorsRepository.findOneBy({ id: authorId });
    if (!author) throw new NotFoundException(`Autor no encontrado`);
    return author;
  }

  createOne(authorData: CreateAuthorDTO) {
    const newAuthor = this.authorsRepository.create(authorData); // crea la entidad pero no la guarda
    return this.authorsRepository.save(newAuthor);
  }

  async updateOne(authorId: number, fieldsToUpdate: UpdateAuthorDTO) {
    const author = await this.authorsRepository.findOneBy({ id: authorId });
    if (!author) throw new NotFoundException(`Autor no encontrado`);
    this.authorsRepository.merge(author, fieldsToUpdate);
    return this.authorsRepository.save(author);
  }

  async removeOne(authorId: number) {
    return this.authorsRepository.delete(authorId);
  }
}
