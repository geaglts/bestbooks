import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

// entities
import { AuthorEntity } from '../authors';
import { CategoryEntity } from '../categories';
import { PublisherEntity } from '../publishers';

@Entity({ name: 'books' })
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'int' })
  pages: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => PublisherEntity, (publisher) => publisher.books)
  publisher: PublisherEntity;

  @Column({ type: 'int' })
  publication_year: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToMany(() => AuthorEntity, (author) => author.books)
  @JoinTable({ name: 'authors_books' })
  authors: AuthorEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.books)
  @JoinTable({ name: 'book_categories' })
  categories: CategoryEntity[];
}
