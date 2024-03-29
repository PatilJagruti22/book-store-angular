import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';
import { PriceModel } from '../../models/price.model';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  providers: [BookService]
})
export class AllBooksComponent implements OnInit{
 
  private _pageTitle: string;
  private _counterService: any;
  cart: any;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }

  public books: BookModel[] = [];
  //books: BookModel[] = [];

  constructor(public bookService: BookService) { 
    
  }

  ngOnInit(): void {
    this.pageTitle = 'All books'
    this.getAllBooks();
  }

  public increase(): void {
    this._counterService.incCounter();
  }

  public decrease(): void {
    this._counterService.decCounter();
  }

  private getAllBooks(): void {
    this.bookService.getBooks()
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  addToCart(book: BookModel): void {
    this.bookService.addToCart(book); // Correctly call the addToCart method
  }
  

}
