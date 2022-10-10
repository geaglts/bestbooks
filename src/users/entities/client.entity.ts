import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
