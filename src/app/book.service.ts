import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BooksList } from './models/listBooks.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(allBooks: string): Observable<BooksList[]> {
    return this.httpClient.get<BooksList[]>('http://10.117.189.87:7770/library/books/' + allBooks);
  }
}
