import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let users = [
      { id: 1, name: '1', books: ['test'] },
      { id: 2, name: '2', books: ['test1'] },
      { id: 3, name: '3', books: ['test2'] },
      { id: 4, name: '4', books: ['test3'] },
    ];

    let books = [
      { id: 1, title: 'b1' },
      { id: 2, title: 'b2' },
      { id: 3, title: 'b3' },
      { id: 4, title: 'b4' },
    ];

    return { users, books };
  }
}
