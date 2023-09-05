import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private cart: BookModel[] = [];
 
  constructor(private _httpClient : HttpClient) {
   }

  public addBook(bookModel : BookModel) : Observable<BookModel>{
    return this._httpClient.post<BookModel>('https://localhost:44363/api/Books', bookModel);
  }

  public getBooks(): Observable<BookModel[]> {
   // return this._httpClient.get<BookModel[]>('https://localhost:7193/api/Books');
   return this._httpClient.get<BookModel[]>('https://localhost:44363/api/Books');
  }

  public addToCart(book: BookModel): void {
    this.cart.push(book);
    console.log('Book added to cart:', book);
  console.log('Updated Cart:', this.cart);
  }
  

  public getCart(): BookModel[] {
    console.log('Retrieving Cart:', this.cart);
    return this.cart;
  }

  public removeFromCart(book: BookModel): void {
    const index = this.cart.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
  
}
