import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private allBooks = [
        {
          "id": 1,
          "title": "Java Mutithreding",
          "totalPages": "200",
          "author": "John Doe",
          "price": {
            "currency": "USD",
            "value": 19.99
          }
        },
        {
          "id": 2,
          "title": "C#",
          "totalPages": "2000",
          "author": "John Does",
          "price": {
            "currency": "USD",
            "value": 19.999
          }
        },
        {
          "id": 3,
          "title": "PHP",
          "totalPages": "3000",
          "author": "Prince",
          "price": {
            "currency": "USD",
            "value": 56.999
          }
        },
        {
          "id": 4,
          "title": "MVC Fundamentals",
          "totalPages": "700",
          "author": "Does",
          "price": {
            "currency": "USD",
            "value": 99
          }
        },
        {
          "id": 5,
          "title": "DotNet Core",
          "totalPages": "2000",
          "author": "John Does",
          "price": {
            "currency": "USD",
            "value": 19.999
          }
        },
        {
          "id": 6,
          "title": "Azure Fundamentals",
          "totalPages": "700",
          "author": "Does",
          "price": {
            "currency": "USD",
            "value": 99
          }
        },
        {
          "id": 7,
          "title": "Machine Learning",
          "totalPages": "2000",
          "author": "John Does",
          "price": {
            "currency": "USD",
            "value": 19.999
          }
        }
      ];

  constructor() { }

  // public addBook(bookModel: BookModel): void{
  //   this.allBooks.push(bookModel);
  // }

  public addBook(bookModel: BookModel): void {
    console.log('Adding book:', bookModel);
    this.allBooks.push(bookModel);
    console.log('All books after adding:', this.allBooks);
  }
  
  public getBooks(): any {
    return this.allBooks;
}


  public recentBooks() : any {
    return (
      [
        {
          "id": 1,
          "title": "Java Mutithreding",
          "totalPages": "200",
          "author": "John Doe",
          "price": {
            "currency": "USD",
            "value": 19.99
          }
        },
        {
          "id": 2,
          "title": "C#",
          "totalPages": "2000",
          "author": "John Does",
          "price": {
            "currency": "USD",
            "value": 19.999
          }
        },
        {
          "id": 3,
          "title": "PHP",
          "totalPages": "3000",
          "author": "Prince",
          "price": {
            "currency": "USD",
            "value": 56.999
          }
        },
        {
          "id": 4,
          "title": "MVC Fundamentals",
          "totalPages": "700",
          "author": "Does",
          "price": {
            "currency": "USD",
            "value": 99
          }
        },
      ] 
    )
    
    
  }

}
