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
import { Exclude, Expose } from 'class-transformer';

import { ClientEntity } from './client.entity';

// utils
import capitalize from '../../utils/capitalize';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index() // indexacion de campo
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'varchar' })
  rol: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean;

  @Column({ type: 'varchar', length: 40, unique: true })
  username: string;

  @Exclude()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Exclude()
  @OneToOne(() => ClientEntity, (client) => client.user, { nullable: true })
  @JoinColumn()
  client: ClientEntity;

  @Expose()
  get fullName(): string {
    if (this.client) {
      return `${capitalize(this.client.name)} ${capitalize(
        this.client.last_name,
      )} ${capitalize(this.client.second_last_name)}`;
    }
    return null;
  }

  @Expose()
  get clientId(): number {
    if (!this.client) return null;
    return this.client.id;
  }

  @Expose()
  get credits(): number {
    if (!this.client) return null;
    return this.client.credits;
  }
}
