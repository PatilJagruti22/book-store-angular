import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private cart: BookModel[] = [];


  getCart(): BookModel[] {
    return this.cart;
  }

  removeFromCart(book: BookModel): void {
    const index = this.cart.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  

}
