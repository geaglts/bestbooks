import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { ClientEntity } from './client.entity';
import { ShoppingItemEntity } from './shoppingItem.entity';

@Entity({ name: 'shoppings' })
export class ShoppingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => ClientEntity, (client) => client.shoppings)
  client: ClientEntity;

  @OneToMany(() => ShoppingItemEntity, (shoppingItem) => shoppingItem.shopping)
  shoppingItems: ShoppingItemEntity[];
}
