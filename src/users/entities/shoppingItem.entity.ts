import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { ShoppingEntity } from './shopping.entity';
import { BookEntity } from '../../books/entities/book.entity';

@Entity({ name: 'shopping_items' })
export class ShoppingItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'int', default: 0 })
  quantity: number;

  @ManyToOne(() => ShoppingEntity)
  @JoinColumn({ name: 'shopping_id' })
  shopping: ShoppingEntity;

  @ManyToOne(() => BookEntity)
  @JoinColumn({ name: 'book_id' })
  book: BookEntity;
}
