import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { CartComponent } from '../cart/cart.component';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
    /*{
      titulo: "Al asalto del Cielo",
      autor: "Louis De Wohl",
      editorial: "Arcaduz",
      precio: 200,
      stock: 7,
      imagen: "../assets/img/al asalto del cielo.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      titulo: "Don Quijote",
      autor: "Miguel De Cervantes",
      editorial: "Libsa",
      precio: 200,
      stock: 0,
      imagen: "../assets/img/don quijote.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      titulo: "Marianela",
      autor: "Benito Perez Galdós",
      editorial: "Hernando",
      precio: 200,
      stock: 21,
      imagen: "../assets/img/marianela.jpg",
      clearance: false,
      quantity: 0,
    }
  ];*/

  constructor(
    private cart: BookCartService,
    private bookDataService: BookDataService) { 
    
  }

  ngOnInit(): void {
    this.bookDataService.getAll()
    .subscribe(books => this.books = books);
  }

  addToCart(book): void {
    this.cart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }

  maxReached(m: string) {
    alert(m);
  }

}
