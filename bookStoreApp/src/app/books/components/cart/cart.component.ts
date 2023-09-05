import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cart: BookModel[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this.getCart();
    this.bookService.getCart();
  }

  getCart(): void {
    
  //this.cartContents = this.cartService.getCart();
    this.cart = this.bookService.getCart();
    console.log('Cart contents:', this.cart);
  }

  removeFromCart(book: BookModel): void {
    this.bookService.removeFromCart(book);
    this.getCart();
  }

  calculateTotal(): number {
    let total = 0;
    for (const book of this.cart) {
      total += book.price.value; // Access the numeric value from PriceModel
    }
    return total;
  }
}
