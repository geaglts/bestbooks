import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';

import { ClientEntity } from './client.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index() // indexacion de campo
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'varchar', length: 40, unique: true })
  username: string;

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

  @OneToOne(() => ClientEntity, (client) => client.user, { nullable: true })
  @JoinColumn()
  client: ClientEntity;
}
