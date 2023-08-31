import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  bookId: number =1;
  authorId: number =100;

  constructor(){}

  ngOnInit(){}
}
