import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { ShoppingEntity } from './shopping.entity';
import { BookEntity } from '../../books/entities/book.entity';

@Entity({ name: 'shopping_items' })
export class ShoppingItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'int', default: 0 })
  quantity: number;

  @ManyToOne(() => ShoppingEntity)
  shopping: ShoppingEntity;

  @ManyToOne(() => BookEntity)
  book: BookEntity;
}
