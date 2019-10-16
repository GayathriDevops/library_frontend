import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/book.service';
import { BooksList } from 'src/app/models/listBooks.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  getBooks: string = '';
  constructor(private http: HttpClient, private bookService: BookService) { }
  books: BooksList[];
  ngOnInit() {
  }
  // getBookList() {
  //   // this.http.get(this.getBooks);
  //   this.bookService.getBooks().subscribe(books => {
  //     this.books = books;
  //   })
  // }
}
