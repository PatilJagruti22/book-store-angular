import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit{


  @Input() book: BookModel;
  @Input('allBooks') books: BookModel[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
  }

  addToCart(book: BookModel): void {
    this.bookService.addToCart(book);
  }

}
