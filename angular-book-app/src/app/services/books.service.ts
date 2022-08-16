import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let books = [
      { id: 1, title: 'PO1' },
      { id: 2, title: 'PO2' },
      { id: 3, title: 'PO3' },
      { id: 4, title: 'PO4' },
    ];

    return { books };
  }
}
