import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {
  
  private _cartList: Book[] = [];
  cartList: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  
  constructor() { }

  addToCart(book: Book) {
    let item: Book = this._cartList.find((v1) => v1.titulo == book.titulo);
    if (!item) {
      this._cartList.push({ ... book});
    } else {
      item.quantity += book.quantity;
    }
    this.cartList.next(this._cartList);
  }

}
