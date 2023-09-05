import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private cartItems: BookModel[] = [];
  private cartSubject: BehaviorSubject<BookModel[]> = new BehaviorSubject<BookModel[]>([]);

 
  constructor(private _httpClient : HttpClient) {
    this.cartSubject.next(this.cartItems);
   }

  public addBook(bookModel : BookModel) : Observable<BookModel>{
    return this._httpClient.post<BookModel>('https://localhost:7193/api/Books', bookModel);
  }

  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7193/api/Books');
  }

  public addToCart(book: BookModel): void {
    // Check if the book is already in the cart
    const existingBook = this.cartItems.find(item => item.id === book.id);

    if (existingBook) {
      // If the book is already in the cart, you might want to update its quantity or perform some other action.
      // For simplicity, this example just increments the quantity.
      existingBook.quantity += 1;
    } else {
      // If the book is not in the cart, add it to the cart with a quantity of 1.
      const newBook: BookModel = { ...book, quantity: 1 };
      this.cartItems.push(newBook);
    }
  }
  
}
