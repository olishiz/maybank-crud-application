import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  create(book: Omit<Book, 'id'>): Book {
    const newBook = { id: this.idCounter++, ...book };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  update(id: number, book: Partial<Book>): Book | undefined {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books[index] = { ...this.books[index], ...book };
    return this.books[index];
  }

  delete(id: number): boolean {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    this.books.splice(index, 1);
    return true;
  }
}
