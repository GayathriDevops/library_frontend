import { Component, OnInit } from '@angular/core';
import { BooksList } from 'src/app/models/listBooks.model';
import { BookService } from 'src/app/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private http: HttpClient, private bookService: BookService) { }
  searchText: string;
  books: BooksList[];
  ngOnInit() {
  }
  getBookList() {
    // this.http.get(this.getBooks);
    if (this.searchText.length > 3) {

    }
    this.bookService.getBooks(this.searchText).subscribe(books => {
      this.books = books;
      console.log(books);
    })
  }
}
