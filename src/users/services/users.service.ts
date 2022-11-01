import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientEntity, UserEntity } from '../entities';
import { CreateUserDTO, UpdateUserDTO } from '../dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
  ) {}

  findAll() {
    return this.usersRepository.find({ relations: ['client'] });
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['client'],
    });
    if (!user) throw new NotFoundException('usuario no encontrado');
    return user;
  }

  async createOne(data: CreateUserDTO) {
    const newUser = this.usersRepository.create(data);
    const countOfUsers = await this.usersRepository.count();
    if (countOfUsers === 0) {
      newUser.admin = true;
    }
    if (data.clientId) {
      const { clientId } = data;
      const client = await this.clientsRepository.findOneBy({ id: clientId });
      if (!client) throw new NotFoundException('cliente no encontrado');
      newUser.client = client;
    }
    return this.usersRepository.save(newUser);
  }

  async updateOne(id: number, data: UpdateUserDTO) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('usuario no encontrado');
    this.usersRepository.merge(user, data);
    if (data.clientId) {
      const { clientId } = data;
      const client = await this.clientsRepository.findOneBy({ id: clientId });
      if (!client) throw new NotFoundException('cliente no encontrado');
      user.client = client;
    }
    return this.usersRepository.save(user);
  }

  async removeOne(id: number) {
    return this.usersRepository.delete(id);
  }
}
