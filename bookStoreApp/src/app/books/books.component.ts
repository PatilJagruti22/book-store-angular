import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  public id: number = 0;
  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }
}
