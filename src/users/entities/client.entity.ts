import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { BookEntity } from '../../books/entities/book.entity';
import { UserEntity } from './user.entity';
import { ShoppingEntity } from './shopping.entity';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  last_name: string;

  @Column({ type: 'varchar' })
  second_last_name: string;

  @Column({ type: 'int', default: 0 })
  credits: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToOne(() => UserEntity, (user) => user.client, { nullable: true })
  user: UserEntity;

  @ManyToMany(() => BookEntity, (book) => book.favoriteOf)
  @JoinTable({
    name: 'favorites',
    joinColumn: { name: 'client_id' },
    inverseJoinColumn: {
      name: 'book_id',
    },
  })
  favoritesBooks: BookEntity[];

  @OneToMany(() => ShoppingEntity, (shopping) => shopping.client)
  shoppings: ShoppingEntity[];
}
