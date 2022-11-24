import { Component, OnInit } from '@angular/core';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {
      titulo: "Al asalto del Cielo",
      autor: "Louis De Wohl",
      editorial: "Arcaduz",
      precio: 200,
      stock: 21,
      imagen: "/assets/img/al asalto del cielo.jpg",
      clearance: false,
    },
    {
      titulo: "Don Quijote",
      autor: "Louis De Wohl",
      editorial: "Libsa",
      precio: 200,
      stock: 0,
      imagen: "/assets/img/don quijote.jpg",
      clearance: true,
    },
    {
      titulo: "Marianela",
      autor: "Louis De Wohl",
      editorial: "Hernando",
      precio: 200,
      stock: 21,
      imagen: "/assets/img/marianela.jpg",
      clearance: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
