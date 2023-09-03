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
 
  public _pageTitle : string;

    public set pageTitle(value: string){
      this._pageTitle = value;
    }

    public get pageTitle(){
      return this._pageTitle;
    }
   
  public books: BookModel[] = [];

  constructor(public bookService : BookService, public _counterService : CounterService){}
  ngOnInit(): void {
    this._pageTitle = 'All Books'
    const allBooks = this.bookService.getBooks();
    if (Array.isArray(allBooks)) {
      allBooks.forEach((b: { id: number; author: string; price: PriceModel; title: string; totalPages: string; }) => {
        var obj = new BookModel();
        obj.id = b.id;
        obj.author = b.author;
        obj.price = b.price;
        obj.title = b.title;
        obj.totalPages = b.totalPages;
        this.books.push(obj);
      });
      console.log(this.books);
    } else {
      console.error('Expected an array of books, but got:', allBooks);
    }
  }

  increase(){
    this._counterService.incCounter();
  }

  decrease(){
    this._counterService.decCounter();
  }

}