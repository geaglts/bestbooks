import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';

// entities
import { AuthorEntity } from '../authors';
import { CategoryEntity } from '../categories';
import { PublisherEntity } from '../publishers';
import { ClientEntity } from '../../users/entities';

@Entity({ name: 'books' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'int' })
  pages: number;

  @Index() // indexacion de campos
  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => PublisherEntity, (publisher) => publisher.books)
  publisher: PublisherEntity;

  @Column({ type: 'int' })
  publication_year: number;

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

  @ManyToMany(() => AuthorEntity, (author) => author.books)
  @JoinTable({ name: 'authors_books' })
  authors: AuthorEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.books)
  @JoinTable({ name: 'book_categories' })
  categories: CategoryEntity[];

  @ManyToMany(() => ClientEntity, (client) => client.favoritesBooks)
  favoriteOf: ClientEntity[];
}
