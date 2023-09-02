import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks() : BookModel[] {
    return (
      [
        {
          "id": 1,
          "title": "Sample Book",
          "totalPages": "200",
          "author": "John Doe",
          "price": {
            "currency": "USD",
            "value": 19.99
          }
        }
      ] 
    )
    
    
  }
}
