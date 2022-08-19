import { Book } from './book.model';

export interface User {
  id: number;
  name: string;
  books: Book[];
}
