import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit{

  @Input('allBooks') books: BookModel[];
  //public books: BookModel[] = [];

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  private getAllBooks(): void {
    this.bookService.getBooks().subscribe((books: BookModel[]) => {
      this.books = books;
    });
  }

  addToCart(book: BookModel): void {
    this.bookService.addToCart(book);
  }
}
