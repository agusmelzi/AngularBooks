import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Book[]>;
  constructor(private cart: BookCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  removeToCart(book: Book): void {
    this.cart.removeToCart(book);
  }
}
